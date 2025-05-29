import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import type React from "react";

type PropsSelectDificult = {
  setDificulty: React.Dispatch<React.SetStateAction<string>>;
};

export default function SelectDificult({ setDificulty }: PropsSelectDificult) {
  return (
    <Box sx={{ minWidth: 1 / 2 }}>
      <FormControl fullWidth>
        <InputLabel variant="outlined" className="text-gray-700 font-semibold">
          Difficulty Quiz
        </InputLabel>
        <NativeSelect
          defaultValue={""}
          inputProps={{
            name: "difficulty",
            id: "uncontrolled-native",
          }}
          className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 "
          onChange={(e) => setDificulty(e.target.value)}
        >
          <option value={""} className="px-3 py-2 ">
            Acak
          </option>
          <option value={"easy"} className="px-3 py-2 ">
            Easy
          </option>
          <option value={"medium"} className="px-3 py-2 ">
            Medium
          </option>
          <option value={"hard"} className="px-3 py-2 ">
            Hard
          </option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
