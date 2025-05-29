import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import type { QuizDetailState } from "../PrepareQuiz/PreparationQuiz";

export default function AssesmentQuiz() {
  const location = useLocation();
  const navigate = useNavigate();

  const routeState = location.state as QuizDetailState | null;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [quizData, setQuizData] = useState(() => {
    if (routeState?.quizData) return routeState.quizData;

    const saved = localStorage.getItem("quiz-data");
    return saved ? JSON.parse(saved) : [];
  });

  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[][]>([]);
  const [timeLeft, setTimeLeft] = useState(100);
  const [restored, setRestored] = useState(false);

  // Function to create consistent shuffled answers using a seed
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createShuffledAnswers = (quizData: any[]) => {
    return quizData.map((q, questionIndex) => {
      const options = [...q.incorrect_answers, q.correct_answer];

      // Use question index as seed for consistent shuffling
      const seededRandom = (seed: number) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
      };

      // Sort with consistent seed based on question index
      return options.sort((a, b) => {
        const seedA = questionIndex + a.length;
        const seedB = questionIndex + b.length;
        return seededRandom(seedA) - seededRandom(seedB);
      });
    });
  };

  const handleQuizFinish = useCallback(
    (isTimeUp = false) => {
      // Save final answers before clearing
      const finalAnswers = [...userAnswers];

      // Calculate score
      const score = finalAnswers.reduce((acc, answer, index) => {
        if (answer === quizData[index]?.correct_answer) {
          return acc + 1;
        }
        return acc;
      }, 0);

      // Store results for the results page
      const quizResults = {
        answers: finalAnswers,
        score,
        totalQuestions: quizData.length,
        quizData: quizData,
        isTimeUp,
        routeState: quizData?.quizDetail,
        completedAt: new Date().toISOString(),
      };

      localStorage.setItem("quiz-results", JSON.stringify(quizResults));

      // Clear quiz session data
      localStorage.removeItem("quiz-data");
      localStorage.removeItem("quiz-timer");
      localStorage.removeItem("quiz-answers");
      localStorage.removeItem("quiz-shuffled-answers");

      // Navigate to results page
      navigate("/results", {
        state: {
          quizResults,
        },
      });
    },
    [navigate, quizData, userAnswers]
  );

  useEffect(() => {
    if (quizData.length === 0) {
      navigate("/prepare");
      return;
    }

    // Restore or create shuffled answers consistently
    const savedShuffled = localStorage.getItem("quiz-shuffled-answers");
    let shuffled;

    if (savedShuffled) {
      shuffled = JSON.parse(savedShuffled);
    } else {
      shuffled = createShuffledAnswers(quizData);
      localStorage.setItem("quiz-shuffled-answers", JSON.stringify(shuffled));
    }

    setShuffledAnswers(shuffled);

    // Restore user answers
    const savedAnswers = localStorage.getItem("quiz-answers");
    const restoredAnswers = savedAnswers
      ? JSON.parse(savedAnswers)
      : Array(quizData.length).fill(null);
    setUserAnswers(restoredAnswers);

    // Restore timer
    const savedTime = localStorage.getItem("quiz-timer");
    setTimeLeft(savedTime ? parseInt(savedTime, 10) : 100);

    // Restore current question position
    const savedCurrent = localStorage.getItem("quiz-current");
    if (savedCurrent) {
      setCurrent(parseInt(savedCurrent, 10));
    }

    setRestored(true);
  }, [quizData, navigate]);

  useEffect(() => {
    if (!restored) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;

        if (newTime <= 0) {
          clearInterval(timer);
          // Auto finish quiz when time is up
          handleQuizFinish(true);
          return 0;
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [restored, userAnswers, quizData, navigate, handleQuizFinish]);

  useEffect(() => {
    if (restored) {
      localStorage.setItem("quiz-timer", String(timeLeft));
      localStorage.setItem("quiz-answers", JSON.stringify(userAnswers));
      localStorage.setItem("quiz-current", String(current));
    }
  }, [timeLeft, userAnswers, current, restored]);

  const question = quizData[current];
  const answers = shuffledAnswers[current] || [];

  const selectAnswer = (ans: string) => {
    if (!restored) return;
    const updated = [...userAnswers];
    updated[current] = ans;
    setUserAnswers(updated);
  };

  const formatTime = (s: number) => {
    const m = String(Math.floor(s / 60)).padStart(2, "0");
    return `${m}:${String(s % 60).padStart(2, "0")}`;
  };

  const handleNext = () => {
    if (current < quizData.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      handleQuizFinish(false);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent((c) => c - 1);
    }
  };

  // Show loading state while restoring
  if (!restored) {
    return (
      <section className="px-4">
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl">Loading quiz...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto mt-10">
        <h1 className="font-bold text-xl">{question?.category}</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Question {current + 1} of {quizData.length}
          </span>
          <span
            className={`font-mono font-bold text-lg ${
              timeLeft <= 60 ? "text-red-600" : "text-green-600"
            }`}
          >
            ⏳ {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      <form className="learning flex flex-col gap-12 items-center mt-12 w-full pb-12">
        <h1 className="text-3xl font-extrabold text-center max-w-[800px]">
          {question?.question}
        </h1>

        <div className="flex flex-col gap-6 max-w-[750px] w-full">
          {answers.map((ans, idx) => (
            <label
              key={`${current}-${idx}`} // More specific key
              className={`group flex items-center justify-between rounded-full w-full border p-5 gap-4 transition-all duration-300 cursor-pointer ${
                userAnswers[current] === ans
                  ? "border-2 border-[#0A090B] bg-blue-50"
                  : "border-[#EEEEEE] hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <img
                  src="assets/images/icons/arrow-circle-right.svg"
                  alt="icon"
                />
                <span className="font-semibold text-xl">{ans}</span>
              </div>
              <input
                type="radio"
                name={`q-${current}`}
                checked={userAnswers[current] === ans}
                onChange={() => selectAnswer(ans)}
                className="hidden"
              />
            </label>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            disabled={current === 0}
            onClick={handlePrevious}
            className="px-6 py-3 rounded-full bg-gray-300 text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-3 rounded-full bg-[#6436F1] text-white font-bold hover:shadow-lg hover:bg-[#5429d1] transition-all"
          >
            {current < quizData.length - 1 ? "Next" : "Finish Quiz"}
          </button>
        </div>

        {/* Progress indicator */}
        <div className="w-full max-w-[750px]">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{Math.round(((current + 1) / quizData.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#6436F1] h-2 rounded-full transition-all duration-300"
              style={{ width: `${((current + 1) / quizData.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Answer status indicators */}
        <div className="flex flex-wrap gap-2 max-w-[750px] justify-center">
          {userAnswers.map((answer, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`w-8 h-8 rounded-full text-sm font-semibold transition-all ${
                index === current
                  ? "bg-[#6436F1] text-white"
                  : answer
                  ? "bg-green-200 text-green-800 hover:bg-green-300"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </form>
    </section>
  );
}
