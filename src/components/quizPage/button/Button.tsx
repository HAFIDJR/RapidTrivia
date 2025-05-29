import Button from "@mui/material/Button";
import Send from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { fetchQuiz } from "../../../service/quiz";
import { useNavigate } from "react-router";

export type PropsIconCreateButtons = {
  idQuiz: number;
  difficulty: string;
  typeAnswer: string;
};

export default function IconCreateButtons({
  idQuiz,
  difficulty,
  typeAnswer,
}: PropsIconCreateButtons) {
  const navigate = useNavigate();
  async function createQuiz() {
    const result = await fetchQuiz({
      category: idQuiz,
      difficulty: difficulty,
      type: typeAnswer,
    });
    if (result?.results?.length > 0) {
      // Redirect ke halaman persiapan sambil membawa data quiz
      navigate("/preparation", {
        state: {
          quizData: result.results,
          detailQuiz: {
            category: idQuiz,
            difficulty: difficulty,
            type: typeAnswer,
          },
        },
      });
    } else {
      alert("Quiz tidak tersedia atau gagal diambil.");
    }
  }
  return (
    <Stack direction="row" spacing={2} className="mt-4">
      <Button onClick={createQuiz} variant="contained" endIcon={<Send />}>
        Kerjakan Quiz
      </Button>
    </Stack>
  );
}
