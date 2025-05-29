import { useState } from "react";
import { categoryMap } from "../../data/categoryQuiz";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { getQuizColumns } from "./QuizColumn";
import ModalCreateQuiz from "./modal/MocalCreateQuiz";

const quizzes = Object.entries(categoryMap).map(([id, title]) => ({
  id: Number(id),
  title,
  level: "All Levels",
  date: "24 May 2025",
  thumbnail: "assets/images/thumbnail/Basic-Interview.png",
}));

export default function QuizPage() {
  // State Category Quiz
  const [idQuiz, setIdQuiz] = useState<number>(0);
  const [open, setOpen] = useState(false);

  function hanldeQuiz(statusModal: boolean, idQuiz: number) {
    setOpen(statusModal);
    setIdQuiz(idQuiz);
  }
  const columns = getQuizColumns(hanldeQuiz);
  const table = useReactTable({
    data: quizzes,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  // State Dificult Quiz

  // State Jenis Quiz

  return (
    <div className="course-list-container flex flex-col px-5 mt-[30px] gap-[30px]">
      <div className="course-list-header flex flex-nowrap justify-between pb-4 pr-10 border-b border-[#EEEEEE]">
        {table.getHeaderGroups()[0].headers.map((header) => {
          const isQuizHeader = header.column.columnDef.header === "Quiz";

          return (
            <div key={header.id} className="flex shrink-0">
              <p
                className={`text-[#7F8190] ${isQuizHeader ? "w-[220px]" : ""}`}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </p>
            </div>
          );
        })}
      </div>

      {table.getRowModel().rows.map((row) => (
        <div
          key={row.id}
          className="list-items flex flex-nowrap justify-between pr-10"
        >
          {row.getVisibleCells().map((cell) => (
            <div key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </div>
          ))}
        </div>
      ))}
      <div id="pagination" className="flex gap-4 items-center pb-5">
        {Array.from({ length: table.getPageCount() }, (_, i) => (
          <button
            key={i}
            onClick={() => table.setPageIndex(i)}
            className={`flex items-center justify-center border border-[#EEEEEE] rounded-full w-10 h-10 font-semibold transition-all duration-300 hover:text-white hover:bg-[#0A090B] ${
              table.getState().pagination.pageIndex === i
                ? "text-white bg-[#0A090B]"
                : "text-[#7F8190]"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <ModalCreateQuiz id={idQuiz} setOpen={setOpen} open={open} />
    </div>
  );
}
