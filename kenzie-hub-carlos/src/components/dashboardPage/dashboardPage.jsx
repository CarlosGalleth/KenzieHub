import { HeaderDashboard } from "../header/headerDashboard";
import { MainContent } from "./dashboardPage";

export function DashboardPage({ navigate }) {
  return (
    <div>
      <HeaderDashboard navigate={navigate} />

      <MainContent>
        <section>
          <h3>Olá, usuário</h3>
          <p>Introdu~çã asod daiosdoi sajd</p>
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
