import trash from "../../assets/trash.svg";
import { api } from "../../services/api";
export function Tech({ elem, setPatchModal, setModal, setTechId }) {
  async function handleDelete() {
    await api.delete(`users/techs/${elem.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("kenzieHubUser")}`,
      },
    });
  }
  function handlePatch() {
    setModal(true);
    setPatchModal(true);
    setTechId(elem.id);
  }
  return (
    <li onClick={handlePatch}>
      <h3>{elem.title}</h3>
      <div>
        <p>{elem.status}</p>
        <button onClick={handleDelete}>
          <img src={trash} alt="" />
        </button>
      </div>
    </li>
  );
}
