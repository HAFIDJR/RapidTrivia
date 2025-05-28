import { useLocation } from "react-router";
import type { QuizQuestion } from "../../service/quiz";

type LocationState = {
  quizData: QuizQuestion[];
};

export default function PreparationQuiz() {
  const location = useLocation();
  const state = location.state as LocationState | undefined;
  const quizData = state?.quizData;

  if (!quizData) {
    return <p>Data quiz tidak ditemukan.</p>;
  }

  return (
    <div>
      <div className="header ml-[70px] pr-[70px] w-[940px] flex items-center justify-between mt-10">
        <div className="flex gap-6 items-center">
          <div className="w-[150px] h-[150px] flex shrink-0 relative overflow-hidden">
            <img
              src="assets/images/thumbnail/Web-Development.png"
              className="w-full h-full object-contain"
              alt="icon"
            />
            <p className="p-[8px_16px] rounded-full bg-[#FFF2E6] font-bold text-sm text-[#F6770B] absolute bottom-0 transform -translate-x-1/2 left-1/2 text-nowrap">
              {quizData[0].category}
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-extrabold text-[30px] leading-[45px]">
              {quizData[0].category}
            </h1>
            <div className="flex items-center">
              <div className="flex gap-[10px] items-center">
                <div className="w-6 h-6 flex shrink-0">
                  <img src="assets/images/icons/note-text.svg" alt="icon" />
                </div>
                <p className="font-semibold">{quizData.length} task</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <p className="p-[16px_20px] rounded-[10px] bg-[#06BC65] font-bold text-lg text-white outline-[#06BC65] outline-dashed outline-[3px] outline-offset-[7px] mr-[10px] cursor-pointer">
            Kerjakan
          </p>
        </div>
      </div>

      <div className="ml-[70px] pr-[70px] w-[940px] mt-4">
        <p className="text-[#555] text-base leading-relaxed font-medium">
          Latihan ini dirancang sebagai persiapan ujian, dengan estimasi waktu
          pengerjaan selama 10 menit. Pastikan Anda memahami setiap soal sebelum
          menjawab untuk hasil terbaik.
        </p>
      </div>
    </div>
  );
}
