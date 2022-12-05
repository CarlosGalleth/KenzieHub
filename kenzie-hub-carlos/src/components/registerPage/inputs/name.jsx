export function NameInput({ register }) {
  return (
    <input
      id="name"
      type="text"
      placeholder="Digite aqui seu nome"
      {...register("name")}
    />
  );
}
