import InfoContainer from "./InfoContainer";

export default function Objective() {
  const data = {
    objective:
      "Intégrer une équipe de développeurs pour participer à la création de projets innovants et enrichissants.",
  };

  return (
    <>
      <span className="underline font-bold">Projet :</span> {data.objective}
    </>
  );
}
