import { ButtonCancel } from "./modal";

export function PatchTechForm({ errors, setModal }) {
  return (
    <form>
      <div>
        <label htmlFor="techName">Nome do Projeto</label>
        <input
          id="techName"
          type="text"
          placeholder="Material UI"
          autoComplete="off"
        />
        {errors.title?.message && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select id="status">
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status?.message && <p>{errors.status.message}</p>}
      </div>
      <button type="submit">Salvar Alterações</button>
      <ButtonCancel type="button" onClick={() => setModal(false)}>
        Excluir
      </ButtonCancel>
    </form>
  );
}
