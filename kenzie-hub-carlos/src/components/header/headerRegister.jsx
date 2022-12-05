import { HeaderRegisterStyled } from "./header.js";
import { BackButton } from "./headerButtons/registerBackBtn.jsx";

export function HeaderRegister({ navigate }) {
  function handleGoBack(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <HeaderRegisterStyled>
      <div>
        <h1>Kenzie Hub</h1>
        <BackButton handleGoBack={handleGoBack} />
      </div>
    </HeaderRegisterStyled>
  );
}
