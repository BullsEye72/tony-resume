import { sql } from "@vercel/postgres";

function formatPeriod(start_date: Date, end_date: Date): string {
  const frenchMonthsAbrv = [
    "Janv.",
    "Fév.",
    "Mars",
    "Avr.",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ];
  let periodString = "";

  const startYear = start_date.getFullYear();
  const endYear = end_date?.getFullYear();

  const startMonth = start_date.getMonth();
  const endMonth = end_date?.getMonth();

  const startDay = start_date.getDate();
  const endDay = end_date?.getDate();

  if (end_date === null) {
    return `Depuis ${startMonth}-${startYear}`;
  }

  if (endMonth == startMonth && endDay == startDay) {
    return `${startYear}-${endYear}`;
  }

  return `${startMonth}-${startYear} à ${endMonth}-${endYear}`;
}

export default async function FormationTable() {
  const { rows } = await sql`SELECT * FROM "resume-experience" ORDER BY "order" ASC`;

  return (
    <div className="m-6">
      <div className="lgc-blue-bg font-bold text-center w-full">Expériences</div>

      {rows.map((row) => (
        <div
          key={row.id}
          className={`w-full grid grid-cols-[180px_auto_200px] border-dashed border-t-[1px] border-gray-700 ${
            row.priority ? "lgc-lightblue-bg" : ""
          }`}
        >
          <div className="border-dashed border-r-[1px] border-gray-700">
            {formatPeriod(row.start_date, row.end_date)}
            <br />
            <span className="italic">{row.company}</span>
          </div>
          <div className="border-dashed border-r-[1px] border-gray-700">
            <span className="font-bold">{row.role}</span>
            <ul className="list-inside list-disc">
              {row.tasks && row.tasks.map((task: string, index: number) => <li key={index}>{task}</li>)}
            </ul>
          </div>
          <div className={`${row.priority ? "font-bold" : ""}`}>{row.tech && row.tech.join(", ")}</div>
        </div>
      ))}
    </div>
  );
}
