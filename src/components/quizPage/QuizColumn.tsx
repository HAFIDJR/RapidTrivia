import type { ColumnDef } from "@tanstack/react-table";

type Quiz = {
  id: number;
  title: string;
  level: string;
  date: string;
  thumbnail: string;
};
export const getQuizColumns = (
  hanldeQuiz: (statusModal: boolean, idQuiz: number) => void
): ColumnDef<Quiz>[] => [
  {
    accessorKey: "title",
    header: "Quiz",
    size: 300,
    cell: (info) => (
      <div className="flex shrink-0 w-[300px]">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 flex shrink-0 overflow-hidden rounded-full">
            <img
              src={info.row.original.thumbnail}
              className="object-cover"
              alt="thumbnail"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-bold text-lg">{info.row.original.title}</p>
            <p className="text-[#7F8190]">{info.row.original.level}</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Tanggal Dibuat",
    cell: (info) => (
      <div className="flex shrink-0 w-[150px] items-center justify-center ">
        <p className="font-semibold">{info.getValue() as string}</p>
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: "Category",
    cell: (info) => (
      <div className="flex shrink-0 w-[170px] items-center justify-center">
        <p className="p-[8px_16px] rounded-full bg-[#FFF2E6] font-bold text-sm text-[#F6770B]">
          {info.getValue() as string}
        </p>
      </div>
    ),
  },
  {
    id: "actions",
    header: "Action",
    cell: (info) => (
      <div className="flex shrink-0 w-[120px] items-center">
        <div className="relative h-[41px]">
          <div className="w-[120px] h-fit overflow-hidden absolute top-0  bg-white flex flex-col gap-3 border border-[#EEEEEE] transition-all duration-300 hover:shadow-[0_10px_16px_0_#0A090B0D] rounded-[18px]">
            <button
              onClick={() => hanldeQuiz(true, info.row.original.id)}
              className="flex items-center justify-between font-bold text-sm w-full p-3 cursor-pointer"
            >
              Kerjakan Quiz
            </button>
          </div>
        </div>
      </div>
    ),
  },
];
