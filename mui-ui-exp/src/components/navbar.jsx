import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          MUI Component Demo
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
