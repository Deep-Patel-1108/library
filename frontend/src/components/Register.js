import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await registerUser({ name, email, password });
    if (data) {
      navigate("/login");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // background gradient
        padding: "20px"
      }}
    >
      <Paper
        elevation={10}
        sx={{
          maxWidth: "400px",
          padding: "40px 30px",
          borderRadius: "15px",
          backgroundColor: "#fff",
          textAlign: "center"
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", color: "#764ba2" }}
        >
          Welcome Back
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginBottom: "20px", color: "#666" }}
        >
          Please Register a new account
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
