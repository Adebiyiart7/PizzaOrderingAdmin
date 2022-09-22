// LOCAL IMPORTS
import Landing from "./Landing";
import l1 from "../../assets/images/l1.png";
import l2 from "../../assets/images/l2.png";
import l3 from "../../assets/images/l3.png";
import h_img1 from "../../assets/images/h_img1.png";
import h_img2 from "../../assets/images/h_img2.png";
import h_img3 from "../../assets/images/h_img3.png";
import PageTitle from "../../components/pageTitle/PageTitle";
import ProductsDisplay from "../../components/productsDisplay/ProductsDisplay";

const Content = () => {
  return (
    <>
      <Landing />
      <br />
      <br />
      <br />
      
      <div className="delivery-methods">
        <div className="order">
          <img src={l1} alt="" />
          <img src={h_img1} alt="" />
        </div>
        <div className="location">
          <img src={l2} alt="" />
          <img src={h_img2} alt="" />
        </div>
        <div className="delivery">
          <img src={l3} alt="" />
          <img src={h_img3} alt="" />
        </div>
      </div>
      <div>
        <hr style={{ border: "1px solid var(--lightBorder)",borderBottom: "none"}} />
        <PageTitle text="Popular Fast Foods" />
        <p
          style={{
            maxWidth: 500,
            textAlign: "center",
            margin: "auto",
            color: "var(--lightText)",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
          molestiae, ipsa cum voluptates mollitia quibusdam voluptas dolores.
        </p>
        <ProductsDisplay />
      </div>
    </>
  );
};

export default Content;
