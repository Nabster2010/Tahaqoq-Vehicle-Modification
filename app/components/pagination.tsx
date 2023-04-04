import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";
const PAGE_SIZE = 10;

type PaginationProps = {
  totalPages: number | undefined;
  currentPage: number | undefined;
};
const Pagination: FC<PaginationProps> = ({
  totalPages = 1,
  currentPage = 1,
}) => {
  const pagesArr = Array.from({ length: totalPages }, (_, i) => i + 1);
  const nextPage = () => {
    if (currentPage + 1 > totalPages) return currentPage;
    return currentPage + 1;
  };
  const prevPage = () => {
    if (currentPage === 1) return currentPage;
    return currentPage - 1;
  };
  return (
    // <nav aria-label="Page navigation example">
    //   <ul className="inline-flex -space-x-px">
    //     <li>
    //       <Link
    //         href={`/vehicles?page=${prevPage()}&pageSize=${PAGE_SIZE}`}
    //         className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         Previous
    //       </Link>
    //     </li>
    //     {pagesArr.map((page) => (
    //       <li key={page}>
    //         <Link
    //           href={`/vehicles?page=${page}&pageSize=${PAGE_SIZE}`}
    //           className={classNames(
    //             "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
    //             currentPage === page &&
    //               "text-gray-700 bg-gray-100 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
    //           )}
    //         >
    //           {page}
    //         </Link>
    //       </li>
    //     ))}

    //     <li>
    //       <Link
    //         href={`/vehicles?page=${nextPage()}&pageSize=${PAGE_SIZE}`}
    //         className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //       >
    //         Next
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
    <div className="btn-group">
      <Link
        href={`/vehicles?page=${prevPage()}&pageSize=${PAGE_SIZE}`}
        className="btn btn-sm"
      >
        Prev
      </Link>
      {pagesArr.map((page) => (
        <Link
          key={page}
          href={`/vehicles?page=${page}&pageSize=${PAGE_SIZE}`}
          className={classNames(
            "btn btn-sm",
            currentPage === page && "btn-active"
          )}
        >
          {page}
        </Link>
      ))}

      <Link
        href={`/vehicles?page=${nextPage()}&pageSize=${PAGE_SIZE}`}
        className="btn btn-sm"
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
