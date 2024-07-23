import { sql } from "@vercel/postgres";
import InfoContainer from "./InfoContainer";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faPhone, faAddressBook, faCalendarDays, faEnvelope, faCar } from "@fortawesome/free-solid-svg-icons";
import { Suspense } from "react";

export default function ContactInfo() {
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
          <a href={`tel:${info.telephone}`} className="hover:underline">
            {info.telephone}
          </a>
        </li>
        <li>
          <Icon icon={faCalendarDays} />
          {info.date_naissance}
        </li>
        <li>
          <Icon icon={faEnvelope} />
          {info.email}
        </li>
        <li>
          <Icon icon={faCar} />
          {info.extra_content}
        </li>
      </ul>
    );
  }

  return <InfoContainer header="Coordonnées" styleClasses="lgc-lightblue-bg" content={<GetInfo />} />;
}

function Icon({ icon }: { icon: FontAwesomeIconProps["icon"] }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FontAwesomeIcon icon={icon} size="xs" className="mr-2" />
    </Suspense>
  );
}
