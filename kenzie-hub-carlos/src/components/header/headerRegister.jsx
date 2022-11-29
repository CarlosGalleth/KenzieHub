import { HeaderRegisterStyled } from "./header.js";

export function HeaderRegister({ navigate }) {
  function handleGoBack(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <HeaderRegisterStyled>
      <div>
        <h1>Kenzie Hub</h1>
        <button onClick={(e) => handleGoBack(e)}>Voltar</button>
      </div>
    </HeaderRegisterStyled>
  );
}
