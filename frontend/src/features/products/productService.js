import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/api/products";

// GET PRDUCTS
const getProducts = async (query) => {
  const response = await axios.get(API_URL + query);
  if (response.data) {
    return response.data;
  }
};

const productService = {
  getProducts,
};

export default productService;
