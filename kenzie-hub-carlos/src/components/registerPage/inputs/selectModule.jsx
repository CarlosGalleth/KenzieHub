export function SelectModule({ register }) {
  return (
    <select id="selectModule" {...register("module")}>
      <option value="Primeiro Módulo">Primeiro Módulo</option>
      <option value="Segundo Módulo">Segundo Módulo</option>
      <option value="Terceiro Módulo">Terceiro Módulo</option>
      <option value="Quarto Módulo">Quarto Módulo</option>
      <option value="Quinto Módulo">Quinto Módulo</option>
      <option value="Sexto Módulo">Sexto Módulo</option>
    </select>
  );
}
