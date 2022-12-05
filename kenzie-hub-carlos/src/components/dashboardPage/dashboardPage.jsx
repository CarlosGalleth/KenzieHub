import { useState } from "react";
import { api } from "../../services/api";
import { HeaderDashboard } from "../header/headerDashboard";
import { MainContent } from "./dashboardPage";
import trash from "../../assets/trash.svg";
import close from "../../assets/close-icon.png";
import { Modal } from "./modal";

export function DashboardPage({ navigate }) {
  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState();
  const [module, setModule] = useState();
  async function renderUserInfo() {
    let userToken = localStorage.getItem("kenzieHubUser");
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
            <div>
              <div>
                <label htmlFor="techName">Nome</label>
                <input
                  id="techName"
                  type="text"
                  placeholder="Nome da tecnologia"
                />
              </div>
              <div>
                <label htmlFor="status">Selecionar status</label>
                <select id="status">
                  <option value="Iniciante">Iniciante</option>
                </select>
              </div>
              <button>Cadastrar Tecnologia</button>
            </div>
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
          <ul>
            <li>
              <h3>React JS</h3>
              <div>
                <p>Intermediário</p>
                <button>
                  <img src={trash} alt="" />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </MainContent>
    </div>
  );
}
