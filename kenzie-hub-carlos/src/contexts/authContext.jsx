import { createContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children, navigate }) {
  function getData(data) {
    async function fetchData() {
      try {
        const response = await api.post("sessions", data);
        response.status === 200 &&
          navigate(`/dashboard/${response.data.user.name}`);
        localStorage.setItem("kenzieHubUser", response.data.token);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }
  return (
    <AuthContext.Provider value={{ getData }}>{children}</AuthContext.Provider>
  );
}
