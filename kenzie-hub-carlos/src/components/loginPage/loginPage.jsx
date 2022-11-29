import { Container, DontHaveAccount } from "./loginPage.js";
import { Header } from "../header/header.jsx";

export function LoginPage({ navigate }) {
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/dashboard");
  }
  function handleRegister(e) {
    e.preventDefault();
    navigate("/register");
  }
  return (
    <Container>
      <Header />
      <main>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>Login</h3>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Digite aqui seu email..."
              autocomplete="off"
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite aqui sua senha..."
            />
          </div>
          <button type="submit">Entrar</button>
        </form>

        <DontHaveAccount>
          <small>Ainda não possui uma conta?</small>
          <button onClick={(e) => handleRegister(e)}>Cadastre-se</button>
        </DontHaveAccount>
      </main>
    </Container>
  );
}
