import { Backdrop, CircularProgress } from "@mui/material";

function Loader({ open, onClose }) {
  return (
    <Backdrop
      open={open}
      onClick={onClose}
      sx={{ color: "#fff", zIndex: 9999 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loader;
