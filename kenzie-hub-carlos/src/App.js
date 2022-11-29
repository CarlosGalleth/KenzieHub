import { DashboardPage } from "./components/dashboardPage/dashboardPage.jsx";
import { HeaderDashboard } from "./components/header/headerDashboard.jsx";
import { LoginPage } from "./components/loginPage/loginPage.jsx";
import { RegisterPage } from "./components/registerPage/registerPage.jsx";

function App() {
  return (
    <div>
      <HeaderDashboard />
      <DashboardPage />
    </div>
  );
}

export default App;
