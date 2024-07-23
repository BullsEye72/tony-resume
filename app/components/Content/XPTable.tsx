import { sql } from "@vercel/postgres";
import { formatPeriod } from "./actions";
import { Suspense } from "react";

export default async function XPTable() {
  const { rows } = await sql`SELECT * FROM "resume-experience" ORDER BY "order" ASC`;

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}
