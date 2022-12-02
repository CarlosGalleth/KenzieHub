import { Container, DontHaveAccount } from "./loginPage.js";
import { Header } from "../header/header.jsx";
import { api } from "../../services/api.js";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export function LoginPage({ navigate }) {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  function getData({ email, password }) {
    const user = {
      email: email,
      password: password,
    };
    async function fetchData() {
      try {
        const response = await api.post("sessions", user);
        console.log(response);
        response.status === 200 &&
          navigate(`/dashboard/${response.data.user.name}`);
        localStorage.setItem("kenzieHubUser", response.data.token);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }

  function handleRegister(e) {
    e.preventDefault();
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
            <input
              id="email"
              type="text"
              placeholder="Digite aqui seu email..."
              autocomplete="off"
              {...register("email")}
            />
            {errors.email?.message && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite aqui sua senha..."
              {...register("password")}
            />
            {errors.password?.message && <p>{errors.password.message}</p>}
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
