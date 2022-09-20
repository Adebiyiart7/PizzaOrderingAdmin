import Container from "@mui/material/Container";

// LOCAL IMPORTS
import PageTitle from "../../components/PageTitle";
import ProductsDisplay from "../../components/productsDisplay/ProductsDisplay";
import Landing from "./Landing";

const Content = () => {
  return (
    <>
      <Landing />
      <div style={{margin: ".8em"}}>
        <PageTitle text="Popular Fast Foods" />
        <p style={{ maxWidth: 500, textAlign: "center", margin: "auto" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
          molestiae, ipsa cum voluptates mollitia quibusdam voluptas dolores.
        </p>
        <ProductsDisplay />
      </div>
    </>
  );
};

export default Content;
