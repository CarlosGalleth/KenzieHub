import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../services/api";
import { Tech } from "./techs";

export function TechsList({ setPatchModal, setModal, setTechId }) {
  const userToken = localStorage.getItem("kenzieHubUser");
  const [tech, setTech] = useState([]);
  useEffect(() => {
    async function getTechs() {
      const response = await api.get("profile", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setTech([...response.data.techs]);
    }
    getTechs();
  }, [tech]);
  return (
    <ul>
      {tech.map((elem) => {
        return (
          <Tech
            key={elem.id}
            elem={elem}
            setPatchModal={setPatchModal}
            setModal={setModal}
            setTechId={setTechId}
          />
        );
      })}
    </ul>
  );
}
