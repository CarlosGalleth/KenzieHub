import { HeaderRegister } from "../header/headerRegister";
import { RegisterContainer } from "./registerPage";

export function RegisterPage({ navigate }) {
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/login");
  }
  return (
    <RegisterContainer>
      <HeaderRegister navigate={navigate} />
      <main>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>Crie sua conta</h3>
          <small>Rápido e fácil, vamos nessa</small>

          <div>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" placeholder="Digite aqui seu nome" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Digite aqui seu email"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite aqui sua senha"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Digite novamente sua senha"
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <input id="bio" type="text" placeholder="Fale sobre você" />
          </div>
          <div>
            <label htmlFor="contact">Contato</label>
            <input id="contact" type="text" placeholder="Opção de contato" />
          </div>
          <div>
            <label htmlFor="selectModule">Selecionar Módulo</label>
            <select id="selectModule">
              <option value="">Primeiro Módulo</option>
            </select>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </RegisterContainer>
  );
}
