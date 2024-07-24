import { sql } from "@vercel/postgres";
import { formatPeriod } from "./actions";

export default async function FormationTable() {
  const { rows } = await sql`SELECT * FROM "resume-formation" ORDER BY "order" ASC`;

  return (
    <div className="m-6">
      <div className="lgc-blue-bg font-bold text-center w-full">Formation</div>

      {rows.map((row) => (
        <div
          key={row.id}
          className={`w-full grid grid-cols-[180px_auto] border-dashed border-t-[1px] border-gray-700 ${
            row.priority ? "lgc-lightblue-bg" : ""
          }`}
        >
          <div className="border-dashed border-r-[1px] border-gray-700">
            {formatPeriod(row.start_date, row.end_date)}
            <br />
            <span className="font-bold">{row.school_name}</span>
            {row.extra_content && (
              <span className="italic">
                <br />({row.extra_content})
              </span>
            )}
          </div>
          <div className="border-dashed border-r-[1px] border-gray-700">
            <span className="font-bold">{row.titre}</span>
            <ul className="list-inside list-disc">
              {row.items && row.items.map((item: string, index: number) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div className={`${row.priority ? "font-bold" : ""}`}>{row.tech && row.tech.join(", ")}</div>
        </div>
      ))}
    </div>
  );
}
