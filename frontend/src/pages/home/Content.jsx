import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

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
  const splideSlide = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    textAlign: "center",
    padding: "1em 2.5em",
  };

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
        <hr
          style={{
            border: "1px solid var(--lightBorder)",
            borderBottom: "none",
          }}
        />
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
      <div className="reviews">
        <header className="header">What People Say</header>
        <Splide
          style={{
            display: "flex",
          }}
          options={{
            // rewind: true,
            speed: 2000,
            height: 200,
            gap: "1rem",
            autoScroll: true,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide style={splideSlide}>
            <div className="review-splide">
              <p className="review">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                cum repellendus maxime saepe dicta quasi molestias similique
                sint perspiciatis sapiente!
              </p>
              <footer className="reviewer">Emmy James</footer>
            </div>
          </SplideSlide>
          <SplideSlide style={splideSlide}>
            <div className="review-splide">
              <p className="review">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                cum repellendus maxime saepe dicta quasi molestias similique
                sint perspiciatis sapiente!
              </p>
              <footer className="reviewer">Jimmy Mark</footer>
            </div>
          </SplideSlide>
          <SplideSlide style={splideSlide}>
            <div className="review-splide">
              <p className="review">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                cum repellendus maxime saepe dicta quasi molestias similique
                sint perspiciatis sapiente!
              </p>
              <footer className="reviewer">John Paul</footer>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default Content;
