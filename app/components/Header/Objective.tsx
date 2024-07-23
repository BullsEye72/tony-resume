import InfoContainer from "./InfoContainer";

export default function Objective() {
  return (
    <InfoContainer
      styleClasses="lgc-green-bg"
      header="Objectif"
      content={
        <>
          <div className="underline font-bold">Projet :</div>
          <div>
            Intégrer une équipe de développeurs pour participer à la création de projets innovants et enrichissants.
          </div>
        </>
      }
    />
  );
}
