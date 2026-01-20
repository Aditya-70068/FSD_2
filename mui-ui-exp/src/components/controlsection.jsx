import { useState } from "react";
import {
  Typography,
  Slider,
  Select,
  MenuItem,
  Stack
} from "@mui/material";

function ControlsSection() {
  const [age, setAge] = useState("");
  const [volume, setVolume] = useState(30);

  return (
    <Stack spacing={2}>
      <Typography variant="h6">
        Controls
      </Typography>

      <Select
        value={age}
        displayEmpty
        onChange={(e) => setAge(e.target.value)}
      >
        <MenuItem value="">Select Age</MenuItem>
        <MenuItem value={18}>18-25</MenuItem>
        <MenuItem value={26}>26-35</MenuItem>
        <MenuItem value={36}>36+</MenuItem>
      </Select>

      <Typography>
        Volume: {volume}
      </Typography>

      <Slider
        value={volume}
        onChange={(e, val) => setVolume(val)}
      />
    </Stack>
  );
}

export default ControlsSection;
