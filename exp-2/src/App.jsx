import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (name === "") {
      setError(true);
    } else {
      alert("Form Submitted!");
      setError(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ marginTop: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Dashboard UI
        </Typography>

        {/* Bootstrap Card */}
        <div className="card p-3 mb-3">
          <h5 className="text-primary">Bootstrap Section</h5>
          <button
  className="btn btn-success"
  onClick={() => alert("Button Clicked!")}
>
  Click Me
</button>
        </div>

        {/* Grid Layout */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper
  style={{ padding: 20, marginBottom: 10, cursor: "pointer" }}
  onClick={() => alert("Left Panel Clicked")}
>
  <Typography>Left Panel</Typography>
</Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
  style={{ padding: 20, marginBottom: 10, cursor: "pointer" }}
  onClick={() => alert("Right Panel Clicked")}
>
  <Typography>Right Panel</Typography>
</Paper>
          </Grid>
        </Grid>

        {/* Form */}
        <Paper style={{ padding: 20, marginTop: 20 }}>
          <Typography variant="h6">Form</Typography>

          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            error={error}
            helperText={error ? "Name is required" : ""}
            onChange={(e) => setName(e.target.value)}
          />

          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;