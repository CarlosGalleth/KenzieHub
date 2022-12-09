export function CreateTechForm({ handleSubmit, getTech, errors, register }) {
  return (
    <form onSubmit={handleSubmit(getTech)}>
      <div>
        <label htmlFor="techName">Nome</label>
        <input
          id="techName"
          type="text"
          placeholder="Nome da tecnologia"
          autoComplete="off"
          {...register("title")}
        />
        {errors.title?.message && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="status">Selecionar status</label>
        <select id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status?.message && <p>{errors.status.message}</p>}
      </div>
      <button type="submit">Cadastrar Tecnologia</button>
    </form>
  );
}
