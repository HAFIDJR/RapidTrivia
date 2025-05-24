import QuizPage from "../../components/quizPage/QuizPage";

export default function Home() {
  return (
    <>
      <div className="flex flex-col px-5 mt-5">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="font-extrabold text-[30px] leading-[45px]">
              Manage Quiz
            </p>
            <p className="text-[#7F8190]">
              Provide high quality Quiz for best students
            </p>
          </div>
          <a
            href="new-course.html"
            className="h-[52px] p-[14px_20px] bg-[#6436F1] rounded-full font-bold text-white transition-all duration-300 hover:shadow-[0_4px_15px_0_#6436F14D]"
          >
            Generate New Quiz
          </a>
        </div>
        <QuizPage />
      </div>
    </>
  );
}
