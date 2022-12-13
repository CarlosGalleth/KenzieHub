import { MainContent } from "./dashboardPage";
import { TechsList } from "./techsList";

export function MainContentContainer({
  name,
  module,
  createTech,
  setPatchModal,
  setModal,
  setTechId,
}) {
  return (
    <MainContent>
      <section>
        <div>
          <h3>Olá, {name[0].toUpperCase() + name.substring(1)}</h3>
          <p>{module}</p>
        </div>
      </section>
      <div>
        <div>
          <h4>Tecnologias</h4>
          <button onClick={createTech}>+</button>
        </div>
        <TechsList
          setPatchModal={setPatchModal}
          setModal={setModal}
          setTechId={setTechId}
        />
      </div>
    </MainContent>
  );
}
