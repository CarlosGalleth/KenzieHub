import { useState } from "react";
import { api } from "../../services/api";
import { HeaderDashboard } from "../header/headerDashboard";

import { Modal } from "./modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formCreateSchema } from "./yupValidation/createTechValidation";

import { Navigate, useParams } from "react-router-dom";
import { ModalIntern } from "./modalIntern";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { MainContentContainer } from "./mainContent";

export function DashboardPage({ navigate }) {
  const userToken = localStorage.getItem("kenzieHubUser");
  const [modal, setModal] = useState(false);
  const [patchModal, setPatchModal] = useState(false);
  const [techId, setTechId] = useState("");
  const [module, setModule] = useState();
  const { name } = useParams();
  const { user, loading } = useContext(AuthContext);

  if (!userToken) {
    navigate("/login");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formCreateSchema()),
  });

  if (loading) {
    return null;
  }

  async function getTech(data) {
    try {
      await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
    setModal(false);
  }

  async function renderUserInfo() {
    const response = await api.get("profile", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    setModule(response.data.course_module);
  }
  renderUserInfo();

  function createTech() {
    setModal(true);
    setPatchModal(false);
  }

  return (
    <>
      {user ? (
        <div>
          {modal === true && (
            <Modal>
              <ModalIntern
                patchModal={patchModal}
                setModal={setModal}
                errors={errors}
                handleSubmit={handleSubmit}
                getTech={getTech}
                register={register}
              />
            </Modal>
          )}
          <HeaderDashboard navigate={navigate} />
          <MainContentContainer
            name={name}
            module={module}
            createTech={createTech}
            setPatchModal={setPatchModal}
            setModal={setModal}
            setTechId={setTechId}
          />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
