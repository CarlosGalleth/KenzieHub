import { useState } from "react";
import { api } from "../../services/api";
import { HeaderDashboard } from "../header/headerDashboard";
import { MainContent } from "./dashboardPage";
import { Modal } from "./modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formCreateSchema } from "./yupValidation/createTechValidation";
import { TechsList } from "./techsList";
import { Navigate, useParams } from "react-router-dom";
import { ModalIntern } from "./modalIntern";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useEffect } from "react";

export function DashboardPage({ navigate }) {
  const userToken = localStorage.getItem("kenzieHubUser");
  const [modal, setModal] = useState(false);
  const [patchModal, setPatchModal] = useState(false);
  const [techId, setTechId] = useState("");
  const [module, setModule] = useState();
  const { name } = useParams();
  const { user, loading } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formCreateSchema()),
  });

  if (loading) {
    return null;
  }

  async function getTech(data) {
    try {
      await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
    setModal(false);
  }

  async function renderUserInfo() {
    const response = await api.get("profile", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    setModule(response.data.course_module);
  }
  renderUserInfo();

  function createTech() {
    setModal(true);
    setPatchModal(false);
  }

  return (
    <>
      {user ? (
        <div>
          {modal === true && (
            <Modal>
              <ModalIntern
                patchModal={patchModal}
                setModal={setModal}
                errors={errors}
                handleSubmit={handleSubmit}
                getTech={getTech}
                register={register}
              />
            </Modal>
          )}
          <HeaderDashboard navigate={navigate} />
          <MainContent>
            <section>
              <div>
                <h3>Olá, {name[0].toUpperCase() + name.substring(1)}</h3>
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
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
