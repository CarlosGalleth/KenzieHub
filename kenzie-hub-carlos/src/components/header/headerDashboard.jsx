import { HeaderDashboardStyled } from "./header";

export function HeaderDashboard({ navigate }) {
  function handleExit(e) {
    e.preventDefault();
    const user = localStorage.getItem("kenzieHubUser");
    user && localStorage.removeItem("kenzieHubUser");
    navigate("/login");
  }
  return (
    <HeaderDashboardStyled>
      <div>
        <h1>Kenzie Hub</h1>
        <button onClick={(e) => handleExit(e)}>Sair</button>
      </div>
    </HeaderDashboardStyled>
  );
}
