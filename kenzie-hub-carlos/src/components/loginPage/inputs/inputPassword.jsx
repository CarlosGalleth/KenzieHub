export function InputPassword({ register }) {
  return (
    <input
      id="password"
      type="password"
      placeholder="Digite aqui sua senha..."
      {...register("password")}
    />
  );
}
