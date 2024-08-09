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
      <div className="lgc-blue-bg font-bold text-center w-full ">Expériences</div>

      {rows.map((row, rowIndex) => (
        <div
          key={row.id}
          className={`text-sm w-full sm:grid sm:grid-cols-[180px_auto_200px] ${row.priority ? "lgc-lightblue-bg" : ""}`}
        >
          <TableCell
            isLastColumn={false}
            isLastRow={rowIndex === rows.length - 1}
            content={
              <>
                {formatPeriod(row.start_date, row.end_date)}
                <br />
                <span className="italic">{row.company}</span>
              </>
            }
          />

          <TableCell
            isLastColumn={false}
            isLastRow={rowIndex === rows.length - 1}
            content={
              <>
                <span className="font-bold">{row.role}</span>
                <dl className="list-inside list-disc">
                  {row.tasks &&
                    row.tasks.map((task, index) => (
                      <>
                        <dt key={index} className="font-semibold pl-2">
                          {task.title}
                        </dt>
                        {task.detail && <dd className="italic pl-2">{task.detail}</dd>}
                        <br />
                      </>
                    ))}
                </dl>
              </>
            }
          />

          <TableCell
            isLastColumn={true}
            isLastRow={rowIndex === rows.length - 1}
            content={<>{row.tech && row.tech.join(", ")}</>}
          />
        </div>
      ))}
    </div>
  );
}
