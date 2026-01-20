import { useState } from "react";
import { Container, Divider, Stack } from "@mui/material";

import Navbar from "./components/navbar";
import FormSection from "./components/formsection";
import ControlsSection from "./components/controlsection";
import Loader from "./components/loader";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Navbar />

      <Container sx={{ mt: 5 }}>
        <Stack spacing={4}>
          <FormSection onSubmit={() => setLoading(true)} />

          <Divider />

          <ControlsSection />
        </Stack>
      </Container>

      <Loader open={loading} onClose={() => setLoading(false)} />
    </>
  );
}

export default App;
