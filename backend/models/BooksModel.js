import mongoose from 'mongoose';

// Define the schema for the Book model
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },  // Trim spaces for title
  author: { type: String, required: true, trim: true }, // Trim spaces for author
  genre: { type: String, required: true, trim: true },  // Trim spaces for genre
  publishedYear: { 
    type: Number, 
    required: true, 
    min: 1000,  // Ensure publishedYear is not too low (e.g., a year must be realistic)
    max: new Date().getFullYear(),  // Ensure publishedYear is not in the future
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create the model and specify the collection name 'books' in MongoDB Atlas
const Book = mongoose.model('Book', bookSchema, 'books');

export default Book;
