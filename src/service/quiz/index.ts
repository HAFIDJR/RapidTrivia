import axios from "axios";

type queryCreateQuiz = {
  category: number;
  difficulty?: string;
  type?: string;
};

export type QuizResponse = {
  response_code: number;
  results: QuizQuestion[];
};

export type QuizQuestion = {
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export async function fetchQuiz(query: queryCreateQuiz): Promise<QuizResponse> {
  try {
    const { data } = await axios.get("https://opentdb.com/api.php?amount=10", {
      params: query,
    });
    return data;
  } catch (error) {
    console.error("Error fetching quiz:", error);
    throw error;
  }
}
