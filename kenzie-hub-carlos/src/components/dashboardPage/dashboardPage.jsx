import { useState } from "react";
import { api } from "../../services/api";
import { HeaderDashboard } from "../header/headerDashboard";
import { MainContent } from "./dashboardPage";
import close from "../../assets/close-icon.png";
import { ButtonCancel, Modal } from "./modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  formCreateSchema,
  formPatchSchema,
} from "./yupValidation/createTechValidation";
import { TechsList } from "./techsList";
import { CreateTechForm } from "./createTechForm";
import { PatchTechForm } from "./patchTechForm";

export function DashboardPage({ navigate }) {
  const userToken = localStorage.getItem("kenzieHubUser");
  const [modal, setModal] = useState(false);
  const [patchModal, setPatchModal] = useState(false);
  const [techId, setTechId] = useState("");
  const [username, setUsername] = useState();
  const [module, setModule] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formCreateSchema()),
  });

  function getTech({ title, status }) {
    const tech = {
      title: title,
      status: status,
    };
    async function fetchTech() {
      try {
        await api.post("users/techs", tech, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchTech();
    setModal(false);
  }
  async function renderUserInfo() {
    const response = await api.get("profile", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response);
    setUsername(
      response.data.name[0].toUpperCase() + response.data.name.substring(1)
    );
    setModule(response.data.course_module);
  }
  renderUserInfo();

  function createTech() {
    setModal(true);
    setPatchModal(false);
  }

  return (
    <div>
      {modal === true && (
        <Modal>
          <div>
            <header>
              {patchModal ? (
                <h3>Tecnologia Detalhes</h3>
              ) : (
                <h3>Cadastrar Tecnologia</h3>
              )}
              <button onClick={() => setModal(false)}>
                <img src={close} alt="" />
              </button>
            </header>
            {patchModal ? (
              <PatchTechForm errors={errors} setModal={setModal} />
            ) : (
              <CreateTechForm
                handleSubmit={handleSubmit}
                getTech={getTech}
                errors={errors}
                register={register}
              />
            )}
          </div>
        </Modal>
      )}
      <HeaderDashboard navigate={navigate} />
      <MainContent>
        <section>
          <div>
            <h3>Olá, {username}</h3>
            <p>{module}</p>
          </div>
        </section>
        <div>
          <div>
            <h4>Tecnologias</h4>
            <button onClick={createTech}>+</button>
          </div>
          <TechsList
            setPatchModal={setPatchModal}
            setModal={setModal}
            setTechId={setTechId}
          />
        </div>
      </MainContent>
    </div>
  );
}
