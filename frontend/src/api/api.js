import axios from "axios";
import {
  errorMessage,
  successMessage
} from "../utils/functions/toast.function";

const API_URL = 'https://library-3v8m.onrender.com';

console.log(API_URL, "api");

// Fetch books
export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/book`);
    console.log("first124545");
    successMessage("Books fetched successfully");
    return response.data;
  } catch (error) {
    errorMessage("Failed to fetch books");
  }
};

// Add a new book
export const addBook = async (book, token) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.post(`${API_URL}/book`, book, config);
    successMessage("Book added successfully");
    return response.data;
  } catch (error) {
    errorMessage("Failed to add book");
    console.error(error);
  }
};

// Register a new user
export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, user);
    successMessage("User registered successfully");
    return response;
  } catch (error) {
    console.log(error?.response?.data?.message);
    errorMessage(error?.response?.data?.message || "Registration failed", {
      type: "error"
    });
  }
};

// Login user
export const loginUser = async (user) => {
  try {
    console.log(user, "user");
    const response = await axios.post(`${API_URL}/auth/login`, user);
    successMessage("Login successful");
    return response.data;
  } catch (error) {
    errorMessage("Login failed", {
      type: "error"
    });
    console.error(error);
  }
};
