import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../services/api";
import { Tech } from "./techs";

export function TechsList() {
  const userToken = localStorage.getItem("kenzieHubUser");
  const [carai, setCarai] = useState([]);
  useEffect(() => {
    async function getTechs() {
      const response = await api.get("profile", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setCarai(response.data.techs);
    }
    getTechs();
  }, []);
  return (
    <ul>
      {carai.map((elem) => {
        return <Tech key={elem.id} elem={elem} />;
      })}
    </ul>
  );
}
