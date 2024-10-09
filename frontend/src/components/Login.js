import React, { useContext, useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { loginUser } from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser({ email, password });
    login(data?.data?.user, data?.data?.access_token);
    if (data) {
      navigate("/");
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
          Please login to your account
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            sx={{ marginBottom: "25px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              backgroundColor: "#667eea",
              "&:hover": { backgroundColor: "#764ba2" },
              padding: "10px 0",
              fontSize: "16px"
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
