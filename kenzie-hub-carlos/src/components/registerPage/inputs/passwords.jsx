export function PasswordInput({ register }) {
  return (
    <input
      id="password"
      type="password"
      placeholder="Digite aqui sua senha"
      {...register("password")}
    />
  );
}

export function ConfirmPasswordInput({ register }) {
  return (
    <input
      id="confirmPassword"
      type="password"
      placeholder="Digite novamente sua senha"
      {...register("confirmPassword")}
    />
  );
}
