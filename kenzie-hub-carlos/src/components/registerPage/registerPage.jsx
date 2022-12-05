import { useForm } from "react-hook-form";
import { HeaderRegister } from "../header/headerRegister";
import { RegisterContainer } from "./registerPage";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { NameInput } from "./inputs/name";
import { EmailInput } from "./inputs/email";
import { ConfirmPasswordInput, PasswordInput } from "./inputs/passwords";
import { BioInput } from "./inputs/bio";
import { ContactInput } from "./inputs/contact";
import { SelectModule } from "./inputs/selectModule";
import { Register } from "./buttons/register";
import { formSchema } from "./yupValidation/registerValidation";

export function RegisterPage({ navigate }) {
  const user = localStorage.getItem("kenzieHubUser");
  user && localStorage.removeItem("kenzieHubUser");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema()),
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
            <NameInput register={register} />
            {errors.name?.message && <p>{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <EmailInput register={register} />
            {errors.email?.message && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <PasswordInput register={register} />
            {errors.password?.message && <p>{errors.password.message}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <ConfirmPasswordInput register={register} />
            {errors.confirmPassword?.message && (
              <p>{errors.confirmPassword.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <BioInput register={register} />
            {errors.bio?.message && <p>{errors.bio.message}</p>}
          </div>
          <div>
            <label htmlFor="contact">Contato</label>
            <ContactInput register={register} />
            {errors.contact?.message && <p>{errors.contact.message}</p>}
          </div>
          <div>
            <label htmlFor="selectModule">Selecionar Módulo</label>
            <SelectModule register={register} />
          </div>
          <Register />
        </form>
      </main>
    </RegisterContainer>
  );
}
