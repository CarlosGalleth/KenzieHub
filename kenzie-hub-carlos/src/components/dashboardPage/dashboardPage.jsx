import { useState } from "react";
import { api } from "../../services/api";
import { HeaderDashboard } from "../header/headerDashboard";
import { MainContent } from "./dashboardPage";
import close from "../../assets/close-icon.png";
import { Modal } from "./modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formCreateSchema } from "./yupValidation/createTechValidation";
import { TechsList } from "./techsList";

export function DashboardPage({ navigate }) {
  const userToken = localStorage.getItem("kenzieHubUser");
  const [modal, setModal] = useState(false);
  const [patchModal, setPatchModal] = useState(false);
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
    setUsername(
      response.data.name[0].toUpperCase() + response.data.name.substring(1)
    );
    setModule(response.data.course_module);
  }
  renderUserInfo();

  return (
    <div>
      {modal === true && (
        <Modal>
          <div>
            <header>
              <h3>Cadastrar Tecnologia</h3>
              <button onClick={() => setModal(false)}>
                <img src={close} alt="" />
              </button>
            </header>
            <form onSubmit={handleSubmit(getTech)}>
              <div>
                <label htmlFor="techName">Nome</label>
                <input
                  id="techName"
                  type="text"
                  placeholder="Nome da tecnologia"
                  {...register("title")}
                />
                {errors.title?.message && <p>{errors.title.message}</p>}
              </div>
              <div>
                <label htmlFor="status">Selecionar status</label>
                <select id="status" {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                </select>
                {errors.status?.message && <p>{errors.status.message}</p>}
              </div>
              <button type="submit">Cadastrar Tecnologia</button>
            </form>
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
            <button onClick={() => setModal(true)}>+</button>
          </div>
          <TechsList />
        </div>
      </MainContent>
    </div>
  );
}
