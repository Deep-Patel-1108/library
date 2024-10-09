import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
import books from "../public/assets/books.jpg";

const BookList = () => {
  const { books } = useContext(BookContext);

  return (
    <div style={{ paddingTop: "70px" }}>
      <Grid container spacing={3}>
        {books?.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book._id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={books}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {book.author}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BookList;
