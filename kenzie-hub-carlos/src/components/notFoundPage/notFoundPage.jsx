import { NotFoundContainer } from "./notFoundPage";
import notFoundImg from "./notFound.svg";
import { Back } from "./buttons/back";

export function NotFoundPage({ navigate }) {
  function handleGoBack(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <NotFoundContainer>
      <img src={notFoundImg} alt="" />
      <Back handleGoBack={handleGoBack} />
    </NotFoundContainer>
  );
}
