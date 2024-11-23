import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  { 
    author: { type: String, required: true },
    countInStock: { type: String, required: true},
    description: { type: String, required: true},
    image: { type: String, required: true},
    name: { type: String, required: true},
    price: { type: String, required: true},
  }
);

const Book = mongoose.model('Book', bookSchema, 'Books');

export default Book;

/*
NO TOCAR ESTE MODELO ESTO ESTA PERFECTO
*/