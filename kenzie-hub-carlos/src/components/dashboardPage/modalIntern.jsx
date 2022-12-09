import { CreateTechForm } from "./createTechForm";
import { PatchTechForm } from "./patchTechForm";
import close from "../../assets/close-icon.png";

export function ModalIntern({
  patchModal,
  setModal,
  errors,
  handleSubmit,
  getTech,
  register,
}) {
  return (
    <div>
      <header>
        {patchModal ? (
          <h3>Tecnologia Detalhes</h3>
        ) : (
          <h3>Cadastrar Tecnologia</h3>
        )}
        <button onClick={() => setModal(false)}>
          <img src={close} alt="" />
        </button>
      </header>
      {patchModal ? (
        <PatchTechForm errors={errors} setModal={setModal} />
      ) : (
        <CreateTechForm
          handleSubmit={handleSubmit}
          getTech={getTech}
          errors={errors}
          register={register}
        />
      )}
    </div>
  );
}
