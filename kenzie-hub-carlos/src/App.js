import { Route, Routes, useNavigate } from "react-router-dom";
import { DashboardPage } from "./components/dashboardPage/dashboardPage.jsx";
import { LoginPage } from "./components/loginPage/loginPage.jsx";
import { NotFoundPage } from "./components/notFoundPage/notFoundPage.jsx";
import { RegisterPage } from "./components/registerPage/registerPage.jsx";

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<LoginPage navigate={navigate} />} />
      <Route path="/login" element={<LoginPage navigate={navigate} />} />
      <Route path="/register" element={<RegisterPage navigate={navigate} />} />
      <Route path="dashboard" element={<DashboardPage navigate={navigate} />} />
      <Route path="*" element={<NotFoundPage navigate={navigate} />} />
    </Routes>
  );
}

export default App;
