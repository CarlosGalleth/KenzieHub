import { useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children, navigate }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("kenzieHubUser");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  function getData(data) {
    async function fetchData() {
      try {
        const response = await api.post("sessions", data);
        const { token, user: userResponse } = response.data;
        setUser(userResponse);
        response.status === 200 &&
          navigate(`/dashboard/${response.data.user.name}`);
        localStorage.setItem("kenzieHubUser", token);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }
  return (
    <AuthContext.Provider value={{ getData, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
