import { sql } from "@vercel/postgres";
import { formatPeriod } from "./actions";
import TableCell from "./TableCell";

/**
 * Renders a table of formations.
 * @returns The JSX element representing the formations table.
 */
export default async function FormationTable() {
  const { rows } = await sql`SELECT * FROM "resume-formation" ORDER BY "order" ASC`;

  return (
    <div className="m-6 min-w-52">
      <div className="lgc-blue-bg font-bold text-center w-full">Formation</div>

      {rows.map((row, rowIndex) => (
        <div
          key={row.id}
          className={`text-sm w-full sm:grid sm:grid-cols-[180px_auto]  ${row.priority ? "lgc-lightblue-bg" : ""}`}
        >
          <TableCell
            isLastColumn={false}
            isLastRow={rowIndex === rows.length - 1}
            content={
              <>
                {formatPeriod(row.start_date, row.end_date)}
                <br />
                <span className="font-bold">{row.school_name}</span>
                {row.extra_content && (
                  <span className="italic">
                    <br />({row.extra_content})
                  </span>
                )}
              </>
            }
          />
          <TableCell
            isLastColumn={true}
            isLastRow={rowIndex === rows.length - 1}
            content={
              <>
                <span className="font-bold">{row.titre}</span>
                <ul className="list-inside list-disc">
                  {row.items && row.items.map((item: string, index: number) => <li key={index}>{item}</li>)}
                </ul>
              </>
            }
          />
        </div>
      ))}
    </div>
  );
}
