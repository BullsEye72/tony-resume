import InfoContainer from "./InfoContainer";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faEarthEurope, faCar } from "@fortawesome/free-solid-svg-icons";

/**
 * Renders the contact information component.
 */
export default function AboutMe() {
  return (
    <InfoContainer
      header="A Propos"
      styleClasses="lgc-green-bg flex flex-col"
      content={
        <>
          <div className="p-0 m-0 font-bold">
            <Icon icon={faEarthEurope} />
            Langues :
          </div>
          <div>
            Français / Néerlandais :<span className="float-right">Bilingue</span>
          </div>
          <div>
            Anglais :<span className="float-right">Bulats C1 (Avancé)</span>
          </div>

          <div>
            <Icon icon={faCar} />
            Permis B + Voiture
          </div>
        </>
      }
    />
  );
}

/**
 * Renders an icon using the FontAwesomeIcon component.
 * @param icon - The icon to render.
 */
function Icon({ icon }: { icon: FontAwesomeIconProps["icon"] }) {
  return <FontAwesomeIcon icon={icon} size="xs" className="mr-2" />;
}
