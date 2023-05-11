import { finalResult } from "@/lib/utils/helpers";

import classNames from "classnames";
import Link from "next/link";

const Vehicle = ({ vehicle }: any) => {
  const result = vehicle?.result ? finalResult(vehicle.result) : "N/A";

  return (
    <tr key={vehicle?.id}>
      <td>{vehicle.title}</td>
      <td>{vehicle.owner}</td>
      <td>
        <div
          className={classNames(
            "dark:text-white badge w-16 h-8 font-bold",
            result === "PASS" && "badge-success",
            result === "FAIL" && "badge-error",
            result === "N/A" && "badge-warning"
          )}
        >
          {result}
        </div>
      </td>
      <td>
        <Link href={`/vehicles/${vehicle.id}`} className="btn btn-outline">
          Edit
        </Link>
      </td>
      <td>
        <Link
          href={`/vehicles/${vehicle.id}/results`}
          className="btn btn-outline"
        >
          {vehicle?.result ? "View Result" : "Add Result"}
        </Link>
      </td>
      <td>
        <div className="flex gap-1 ">
          <Link
            target={"_blank"}
            href={`/${vehicle.id}/report`}
            className={classNames("btn", result === "N/A" && "btn-disabled")}
          >
            Report
          </Link>
          <Link
            target={"_blank"}
            href={`/api/pdf/report/${vehicle.id}`}
            className="btn btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </Link>
        </div>
      </td>
      <td className="">
        <div className="flex gap-1">
          <Link
            target={"_blank"}
            href={`/${vehicle.id}/letter`}
            className={classNames("btn ", result === "N/A" && "btn-disabled")}
          >
            Letter
          </Link>
          <Link
            target={"_blank"}
            href={`/api/pdf/letter/${vehicle.id}`}
            className="btn btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default Vehicle;
