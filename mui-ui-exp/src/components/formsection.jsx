import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Stack
} from "@mui/material";

function FormSection({ onSubmit }) {
  return (
    <Stack spacing={2}>
      <TextField label="Name" fullWidth />
      <TextField label="Email" fullWidth />

      <FormControlLabel
        control={<Checkbox />}
        label="Accept Terms"
      />

      <Button variant="contained" onClick={onSubmit}>
        Submit
      </Button>
    </Stack>
  );
}

export default FormSection;
