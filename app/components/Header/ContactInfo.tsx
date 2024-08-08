import { sql } from "@vercel/postgres";
import InfoContainer from "./InfoContainer";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faPhone, faAddressBook, faCalendarDays, faEnvelope, faCar } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

/**
 * Renders the contact information component.
 */
export default function ContactInfo() {
  /**
   * Retrieves the contact information from the vercel postgres database.
   * @returns The JSX element containing the contact information.
   */
  async function GetInfo() {
    const { rows } = await sql`SELECT field_name, content FROM "resume-coords"`;
    const info: { [key: string]: string } = {};

    for (const row of rows) {
      info[row.field_name] = row.content;
    }

    return (
      <ul>
        <li className="font-bold text-xl capitalize">
          {info.prenom} {info.nom}
        </li>
        <li className="capitalize">
          <div className="flex ">
            <div>
              <Icon icon={faAddressBook} />
            </div>
            <div className="p-0 m-0 ">
              {info.addresse_1}
              <br />
              {info.addresse_2}
            </div>
          </div>
        </li>

        <li>
          <Icon icon={faPhone} />
          <a
            href={`tel:${info.telephone}`}
            className="underline decoration-dotted underline-offset-2 decoration-gray-600 hover:cursor-pointer"
          >
            {info.telephone}
          </a>
        </li>
        <li>
          <Icon icon={faCalendarDays} />
          {info.date_naissance}
        </li>
        <li>
          <Icon icon={faEnvelope} />
          <a
            href={`mailto:${info.email}`}
            className="underline decoration-dotted underline-offset-2 decoration-gray-600 hover:cursor-pointer"
          >
            {info.email}
          </a>
        </li>

        <li className="print:hidden">
          <Icon icon={faLinkedin} />
          <a
            href={info.linkedin}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-dotted underline-offset-2 decoration-gray-600 hover:cursor-pointer"
          >
            Profil LinkedIn
          </a>
        </li>
      </ul>
    );
  }

  return <InfoContainer header="Coordonnées" styleClasses="lgc-lightblue-bg" content={<GetInfo />} />;
}

/**
 * Renders an icon using the FontAwesomeIcon component.
 * @param icon - The icon to render.
 */
function Icon({ icon }: { icon: FontAwesomeIconProps["icon"] }) {
  return <FontAwesomeIcon icon={icon} size="xs" className="mr-2" />;
}
