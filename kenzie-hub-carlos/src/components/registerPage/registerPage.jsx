import { useForm } from "react-hook-form";
import { HeaderRegister } from "../header/headerRegister";
import { RegisterContainer } from "./registerPage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";

export function RegisterPage({ navigate }) {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "O nome deve conter pelo menos 3 caracteres")
      .max(200, "O nome é muito grande"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches("(?=.*?[a-z])", "É necessário pelo menos uma letra minúscula")
      .matches("(?=.*?[0-9])", "É necessário pelo menos um número")
      .min(8, "É necessário ter pelo menos 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password"), null], "A senha deve corresponder"),
    bio: yup
      .string()
      .required("Bio obrigatória")
      .max(600, "A bio tem mais de 600 caracteres"),
    contact: yup.string().required("Contato obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function getData({ name, email, password, bio, contact, module }) {
    const user = {
      name: name,
      email: email,
      password: password,
      bio: bio,
      contact: contact,
      course_module: module,
    };
    async function fetchData() {
      try {
        const response = await api.post("users", user);
        response.status === 201 && navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }

  return (
    <RegisterContainer>
      <HeaderRegister navigate={navigate} />
      <main>
        <form onSubmit={handleSubmit(getData)} noValidate>
          <h3>Crie sua conta</h3>
          <small>Rápido e fácil, vamos nessa</small>

          <div>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name?.message && <p>{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Digite aqui seu email"
              autoComplete="off"
              {...register("email")}
            />
            {errors.email?.message && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password?.message && <p>{errors.password.message}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message && (
              <p>{errors.confirmPassword.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <input
              id="bio"
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio?.message && <p>{errors.bio.message}</p>}
          </div>
          <div>
            <label htmlFor="contact">Contato</label>
            <input
              id="contact"
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            {errors.contact?.message && <p>{errors.contact.message}</p>}
          </div>
          <div>
            <label htmlFor="selectModule">Selecionar Módulo</label>
            <select id="selectModule" {...register("module")}>
              <option value="Primeiro Módulo">Primeiro Módulo</option>
              <option value="Segundo Módulo">Segundo Módulo</option>
              <option value="Terceiro Módulo">Terceiro Módulo</option>
              <option value="Quarto Módulo">Quarto Módulo</option>
              <option value="Quinto Módulo">Quinto Módulo</option>
              <option value="Sexto Módulo">Sexto Módulo</option>
            </select>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </RegisterContainer>
  );
}
