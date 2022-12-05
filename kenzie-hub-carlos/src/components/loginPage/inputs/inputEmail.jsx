export function InputEmail({ register }) {
  return (
    <input
      id="email"
      type="text"
      placeholder="Digite aqui seu email..."
      autocomplete="off"
      {...register("email")}
    />
  );
}
