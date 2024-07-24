import { sql } from "@vercel/postgres";
import { formatPeriod } from "./actions";
import TableCell from "./TableCell";

/**
 * Renders a table of experiences.
 * @returns The JSX element representing the experience table.
 */
export default async function XPTable() {
  //Fetch the rows from the vercel postgres database
  const { rows } = await sql`SELECT * FROM "resume-experience" ORDER BY "order" ASC`;

  return (
    <div className="m-6 min-w-52">
      <div className="lgc-blue-bg font-bold text-center w-full">Expériences</div>

      {rows.map((row) => (
        <div
          key={row.id}
          className={`text-sm w-full sm:grid sm:grid-cols-[180px_auto_200px] border-dashed border-t-[1px] border-gray-700 ${
            row.priority ? "lgc-lightblue-bg" : ""
          }`}
        >
          <TableCell
            content={
              <>
                {formatPeriod(row.start_date, row.end_date)}
                <br />
                <span className="italic">{row.company}</span>
              </>
            }
          />

          <TableCell
            content={
              <>
                <span className="font-bold">{row.role}</span>
                <ul className="list-inside list-disc">
                  {row.tasks && row.tasks.map((task: string, index: number) => <li key={index}>{task}</li>)}
                </ul>
              </>
            }
          />

          <TableCell content={<>{row.tech && row.tech.join(", ")}</>} />
        </div>
      ))}
    </div>
  );
}
