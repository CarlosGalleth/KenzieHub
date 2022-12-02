import { useState } from "react";
import { api } from "../../services/api";
import { HeaderDashboard } from "../header/headerDashboard";
import { MainContent } from "./dashboardPage";

export function DashboardPage({ navigate }) {
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
      <HeaderDashboard navigate={navigate} />
      <MainContent>
        <section>
          <h3>Olá, {username}</h3>
          <p>{module}</p>
        </section>
        <div>
          <h3>Que pena! Estamos em desenvolvimento :{"("}</h3>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </MainContent>
    </div>
  );
}
