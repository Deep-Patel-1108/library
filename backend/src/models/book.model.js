import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
});

const Books = new mongoose.model('book', bookSchema);

// Book.sync({ force: true });
export default Books;
