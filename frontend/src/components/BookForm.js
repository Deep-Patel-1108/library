import React, { useState, useContext } from "react";
import { TextField, Button, Box, Typography, Card, CardContent } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { BookContext } from "../context/BookContext";
import { addBook } from "../api/api";

const BookForm = () => {
  const { token } = useContext(AuthContext);
  const { setBooks, books } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = { title, author };
      const data = await addBook(newBook, token);
      setBooks([...books, data?.data]);
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ background: "#f5f5f5" }}  // Light background color
    >
      <Card 
        sx={{
          width: "400px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px"
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" }}>
            Add a New Book
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                sx: { fontSize: "18px", color: "#555" }
              }}
            />
            <TextField
              label="Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                sx: { fontSize: "18px", color: "#555" }
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                marginTop: "16px",
                padding: "12px 0",
                fontSize: "16px",
                backgroundColor: "#1976d2",
                ":hover": {
                  backgroundColor: "#1565c0"
                }
              }}
            >
              Add Book
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BookForm;
