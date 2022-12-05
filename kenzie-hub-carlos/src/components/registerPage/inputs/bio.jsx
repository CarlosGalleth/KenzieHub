export function BioInput({ register }) {
  return (
    <input
      id="bio"
      type="text"
      placeholder="Fale sobre você"
      {...register("bio")}
    />
  );
}
