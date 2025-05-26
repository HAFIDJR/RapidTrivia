import Button from "@mui/material/Button";
import Send from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function IconCreateButtons() {
  return (
    <Stack direction="row" spacing={2} className="mt-4">
      <Button variant="contained" endIcon={<Send />}>
        Kerjakan Quiz
      </Button>
    </Stack>
  );
}
