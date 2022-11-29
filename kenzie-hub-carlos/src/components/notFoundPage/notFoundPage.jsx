import { NotFoundContainer } from "./notFoundPage";
import notFoundImg from "./notFound.svg";

export function NotFoundPage({ navigate }) {
  function handleGoBack(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <NotFoundContainer>
      <img src={notFoundImg} alt="" />
      <button onClick={(e) => handleGoBack(e)}>Voltar</button>
    </NotFoundContainer>
  );
}
