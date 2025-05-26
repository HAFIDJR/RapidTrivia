import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
export default function SelectTypeAnswer() {
  return (
    <Box sx={{ minWidth: 1/2 }}>
      <FormControl fullWidth>
        <InputLabel variant="outlined" className="text-gray-700 font-semibold">
          Difficulty Quiz
        </InputLabel>
        <NativeSelect
          defaultValue={"any"}
          inputProps={{
            name: "difficulty",
            id: "uncontrolled-native",
          }}
          className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value={"any"}>Acak</option>
          <option value={"multiple"}>Multiple Choice</option>
          <option value={"boolean"}>True/False</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
