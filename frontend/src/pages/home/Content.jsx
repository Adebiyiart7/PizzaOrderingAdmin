

// LOCAL IMPORTS
import PageTitle from "../../components/pageTitle/PageTitle";
import ProductsDisplay from "../../components/productsDisplay/ProductsDisplay";
import Landing from "./Landing";

const Content = () => {
  return (
    <>
      <Landing />
      <div>
        <PageTitle text="Popular Fast Foods" />
        <p style={{ maxWidth: 500, textAlign: "center", margin: "auto", color: "var(--lightText)"}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
          molestiae, ipsa cum voluptates mollitia quibusdam voluptas dolores.
        </p>
        <ProductsDisplay />
      </div>
    </>
  );
};

export default Content;
