import { Container, DontHaveAccount } from "./loginPage.js";
import { Header } from "../header/header.jsx";

export function LoginPage() {
  return (
    <Container>
      <Header />
      <main>
        <form>
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
          <button>Cadastre-se</button>
        </DontHaveAccount>
      </main>
    </Container>
  );
}
