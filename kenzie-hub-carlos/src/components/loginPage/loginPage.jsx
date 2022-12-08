import { Container, DontHaveAccount } from "./loginPage.js";
import { Header } from "../header/header.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputEmail } from "./inputs/inputEmail.jsx";
import { InputPassword } from "./inputs/inputPassword.jsx";
import { RegisterButton } from "./buttons/register.jsx";
import { LoginButton } from "./buttons/login.jsx";
import { formSchema } from "./yupValidation/loginValidation.jsx";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext.jsx";

export function LoginPage({ navigate }) {
  const user = localStorage.getItem("kenzieHubUser");
  user && localStorage.removeItem("kenzieHubUser");
  const { getData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema()),
  });

  function handleRegister() {
    navigate("register");
  }

  return (
    <Container>
      <Header />
      <main>
        <form noValidate onSubmit={handleSubmit(getData)}>
          <h3>Login</h3>
          <div>
            <label htmlFor="email">Email</label>
            <InputEmail register={register} />
            {errors.email?.message && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <InputPassword register={register} />
            {errors.password?.message && <p>{errors.password.message}</p>}
          </div>
          <LoginButton />
        </form>

        <DontHaveAccount>
          <small>Ainda não possui uma conta?</small>
          <RegisterButton handleRegister={handleRegister} />
        </DontHaveAccount>
      </main>
    </Container>
  );
}
