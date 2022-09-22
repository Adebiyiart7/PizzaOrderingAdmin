import { useDispatch } from "react-redux";

// LOCAL IMPORTS
import Content from "./Content";
import Layout from "../../layouts/Layout";
import Header from "../../layouts/header/Header";
import { setProductQuery } from "../../features/products/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  dispatch(setProductQuery(`?category=pizza`));

  return (
    <>
      <Layout header={<Header />} content={<Content />} />
    </>
  );
};

export default Home;
