
/*
import { fromEnv } from "@aws-sdk/credential-providers";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand, GetCommand } from "@aws-sdk/lib-dynamodb";

import dotenv from "dotenv";
 
dotenv.config()

const getBooks = async (req, res) => {
  
  if (process.env.NODE_ENV == 'production'){
    var client = new DynamoDBClient({ 
      region: process.env.AWS_REGION, 
    });
  }else{
    var client = new DynamoDBClient({ 
      region: process.env.AWS_REGION, 
      credentials: fromEnv() 
    });
  }

  const docClient = DynamoDBDocumentClient.from(client);
  const command = new ScanCommand({
    TableName: "tb_books",
  });

  const response = await docClient.send(command);

  const books = [];
  for (var i in response.Items) {
    books.push(response.Items[i]);
  }

  res.contentType = 'application/json';
  console.log(books);
  res.json(books);

  return res;

};

const getBooksById = async (req, res) => {

  if (process.env.NODE_ENV == 'production'){
    var client = new DynamoDBClient({ 
      region: process.env.AWS_REGION, 
    });
  }else{
    var client = new DynamoDBClient({ 
      region: process.env.AWS_REGION, 
      credentials: fromEnv() 
    });
  }

  const docClient = DynamoDBDocumentClient.from(client);

  const command = new GetCommand({
    TableName: "tb_books",
    Key: {
      id: req.params.id,
    },
  });

  const response = await docClient.send(command);
  console.log(response.Item);
  res.json(response.Item)
  return res;
};

export { getBooksById, getBooks }*/


import Book from '../models/BooksModel.js'; // Import the Mongoose model


/**
 * Get all books from MongoDB.
 */


const getBooks = async (req, res) => {
  try {
    // Fetch all books from MongoDB
    const books = await Book.find();

    // Send the raw MongoDB data as JSON
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

/*
const getBooks = async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books from MongoDB

    // Flatten nested fields and map them into a simpler structure
    const transformedBooks = books.map(book => ({
      id: book._id?.S , // Use the nested "S" field if present
      author: book.author?.S,
      countInStock: book.countInStock?.S,
      description: book.description?.S , 
      image: book.image?.S ,
      name: book.name?.S ,
      price: book.price?.S
    }));

    res.status(200).json(transformedBooks); // Send the full data
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
*/
/*
const getBooksById = async (req, res) => {
  try {
    // Fetch all books from MongoDB
    const books = await Book.find();

    // Send the raw MongoDB data as JSON
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
*/
/**
 * Get a specific book by its ID from MongoDB.
 */


//HPTA ESTA ES LA FINAL NO TOCAR NADA
const getBooksById = async (req, res) => {
  try {
    const book = await Book.findOne({ id: req.params.id }); // ID QUE NOSTROS LE PASAMOS A LA DB NO TOCAAAAAAAAAAAAAAAR !!!!!PORFAVOR!!!!
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error('Error fetching book by custom ID:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


export {getBooksById, getBooks };
