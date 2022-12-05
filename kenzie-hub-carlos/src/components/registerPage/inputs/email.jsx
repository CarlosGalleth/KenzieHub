export function EmailInput({ register }) {
  return (
    <input
      id="email"
      type="email"
      placeholder="Digite aqui seu email"
      autoComplete="off"
      {...register("email")}
    />
  );
}
