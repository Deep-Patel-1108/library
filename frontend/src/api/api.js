import axios from "axios";
import {
  errorMessage,
  successMessage
} from "../utils/functions/toast.function";

const API_URL = `${process.env.REACT_APP_API_URL}/api/v1`;

// Fetch books
export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/book`);
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
    errorMessage(error?.response?.data?.message || "Registration failed", {
      type: "error"
    });
  }
};

// Login user
export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, user);
    successMessage("Login successful");
    return response.data;
  } catch (error) {
    errorMessage(error?.response?.data?.message, {
      type: "error"
    });
    console.error(error);
  }
};
