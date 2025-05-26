import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { categoryMap } from "../../../data/categoryQuiz";
import SelectDificult from "../input/SelectDificult";
import SelectTypeAnswer from "../input/SelectTypeAnswer";
import IconCreateButtons from "../button/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "#EEEEEE",
  borderRadius: "16px",
  border: "none",
  boxShadow: "0 8px 24px rgba(128, 90, 213, 0.4)",
  p: 4,
  fontFamily: "'Inter', sans-serif",
};

type PropsModalCreateQuiz = {
  setOpen: (prop: boolean) => void;
  id: number | null;
  open: boolean;
};

export default function ModalCreateQuiz({
  setOpen,
  id,
  open,
}: PropsModalCreateQuiz) {
  const handleClose = () => setOpen(false);
  let nameQuiz = "";
  if (id) {
    nameQuiz = categoryMap[id];
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            component="h2"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            {nameQuiz}
          </Typography>

          <h1
            style={{
              textAlign: "center",
              color: "#6b21a8",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {id}
          </h1>
          <div className="flex gap-3">
            <SelectDificult />
            <SelectTypeAnswer />
          </div>
          <IconCreateButtons />
        </Box>
      </Modal>
    </div>
  );
}
