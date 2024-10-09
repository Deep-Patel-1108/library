import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  console.log(user, "user");

  return (
    <AppBar sx={{ background: "#243642", boxShadow: "none" }}>
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          Library Management
        </Typography>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            {user.role == 1 && (
              <Button color="inherit" component={Link} to="/book-form">
                Book Form
              </Button>
            )}

            <Button color="inherit" component={Link} to="/book-list">
              Book List
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
