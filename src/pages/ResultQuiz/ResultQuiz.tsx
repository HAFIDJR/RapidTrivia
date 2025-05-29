import type { QuizQuestion } from "../../service/quiz";
export type PropsResultQuiz = {
  score: number;
  isTimeUp: number;
  quizData: QuizQuestion[];
  totalQuestions: number;
  answers: string[];
};

export default function ResultQuiz() {
  const storedResults = localStorage.getItem("quiz-results");
  const results = storedResults
    ? (JSON.parse(storedResults) as PropsResultQuiz)
    : null;

  if (!results) {
    return (
      <div className="flex items-center justify-center h-full w-full flex-col">
        <h4 className="font-bold text-5xl">Hasil Quiz Tidak Tersedia </h4>
      </div>
    );
  }
  return (
    <div id="menu-content" className="flex flex-col w-full pb-[30px]">
      <div className="header ml-[70px] pr-[70px] w-[940px] flex items-center justify-between mt-10">
        <div className="flex gap-6 items-center">
          <div className="w-[150px] h-[150px] flex shrink-0 relative overflow-hidden">
            <img
              src="assets/images/thumbnail/Web-Development.png"
              className="w-full h-full object-contain"
              alt="icon"
            />
            <p className="p-[8px_16px] rounded-full bg-[#FFF2E6] font-bold text-sm text-[#F6770B] absolute bottom-0 transform -translate-x-1/2 left-1/2 text-nowrap">
              {results.quizData[0].category}
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-extrabold text-[30px] leading-[45px]">
              {results.quizData[0].category}
            </h1>
            <div className="flex items-start flex-col gap-4">
              <div className="flex gap-[10px] items-center">
                <div className="w-6 h-6 flex shrink-0">
                  <img src="assets/images/icons/note-text.svg" alt="icon" />
                </div>
                <p className="font-semibold">{results.score} of 10 correct</p>
              </div>
              <div className="flex gap-[10px] items-center">
                <div className="w-6 h-6 flex shrink-0">
                  <img src="assets/images/icons/note-text.svg" alt="icon" />
                </div>
                <h4 className="font-semibold">
                  Jumlah Kuis Terjawab{" "}
                  {results.answers.filter((val) => val != null).length}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <p
            className={`p-[16px_20px] rounded-[10px] ${
              results.score > 5
                ? "bg-[#28a745] outline-[#28a745]" // Hijau jika Passed
                : "bg-[#FD445E] outline-[#FD445E]" // Merah jika Not Passed
            } font-bold text-lg text-white outline-dashed outline-[3px] outline-offset-[7px] mr-[10px]`}
          >
            {results.score > 5 ? "Passed" : "Not Passed"}
          </p>
        </div>
      </div>
      <div className="result flex flex-col gap-5 mx-[70px] w-[870px] mt-[30px]">
        {results.quizData.map((data: QuizQuestion, index) => (
          <div
            key={index}
            className="question-card w-full flex items-center justify-between p-4 border border-[#EEEEEE] rounded-[20px]"
          >
            <div className="flex flex-col gap-[6px]">
              <p className="text-[#7F8190]">Question</p>
              <p className="font-bold text-xl">{data.question}</p>
            </div>
            <div className="flex items-center gap-[14px]">
              <p
                className={`${
                  data.correct_answer === results.answers[index]
                    ? "bg-[#06BC65]"
                    : "bg-[#FD445E]"
                } rounded-full p-[8px_20px] text-white font-semibold text-sm`}
              >
                {data.correct_answer === results.answers[index]
                  ? "Success"
                  : "Failed"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="options flex items-center mx-[70px] gap-5 mt-[30px]">
        <a
          href=""
          className="w-fit h-[52px] p-[14px_20px] bg-[#0A090B] rounded-full font-semibold text-white transition-all duration-300 text-center"
        >
          Retake Quiz
        </a>
        <a
          href="/"
          className="w-fit h-[52px] p-[14px_20px] bg-[#6436F1] rounded-full font-bold text-white transition-all duration-300 hover:shadow-[0_4px_15px_0_#6436F14D] text-center"
          onClick={() => {
            localStorage.removeItem("quiz-timer");
            localStorage.removeItem("quiz-current");
            localStorage.removeItem("quiz-answers");
            localStorage.removeItem("quiz-results");
          }}
        >
          Home
        </a>
      </div>
    </div>
  );
}
