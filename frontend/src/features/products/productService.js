import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/api/products";

// GET PRDUCTS
const getProducts = async () => {
  const response = await axios.get(API_URL + "/");
  if (response.data) {
    console.log(response.data);
    return response.data;
  }
};

const productService = {
  getProducts,
};

export default productService;
