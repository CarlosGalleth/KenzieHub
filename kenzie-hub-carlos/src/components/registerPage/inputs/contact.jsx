export function ContactInput({ register }) {
  return (
    <input
      id="contact"
      type="text"
      placeholder="Opção de contato"
      {...register("contact")}
    />
  );
}
