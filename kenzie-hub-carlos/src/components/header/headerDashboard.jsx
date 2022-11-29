import { HeaderDashboardStyled } from "./header";

export function HeaderDashboard({ navigate }) {
  function handleExit(e) {
    e.preventDefault();
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
