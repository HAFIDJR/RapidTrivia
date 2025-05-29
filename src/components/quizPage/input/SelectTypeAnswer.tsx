import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

type PropsSelectTypeAnswert = {
  setTypeAnswer: React.Dispatch<React.SetStateAction<string>>;
};

export default function SelectTypeAnswer({
  setTypeAnswer,
}: PropsSelectTypeAnswert) {
  return (
    <Box sx={{ minWidth: 1 / 2 }}>
      <FormControl fullWidth>
        <InputLabel variant="outlined" className="text-gray-700 font-semibold">
          Type Quiz
        </InputLabel>
        <NativeSelect
          defaultValue={""}
          inputProps={{
            name: "type",
            id: "uncontrolled-native",
          }}
          className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setTypeAnswer(e.target.value)}
        >
          <option value={""}>Acak</option>
          <option value={"multiple"}>Multiple Choice</option>
          <option value={"boolean"}>True/False</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
