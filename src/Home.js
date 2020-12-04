import React from "react";
import "./css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src="amazon_banner.jpg" alt="" />
      <div className="home__row">
        <Product
          id={1234}
          star={4}
          title={"Ion8 Leak Proof Slim Water Bottle, BPA-Free, 500 Ml"}
          price={12.24}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81aCbIIX3QL._AC_SL1500_.jpg"
          }
        />
        <Product
          id={1234}
          star={4}
          title={"Ion8 Leak Proof Slim Water Bottle, BPA-Free, 500 Ml"}
          price={12.24}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81aCbIIX3QL._AC_SL1500_.jpg"
          }
        />
      </div>
      <div className="home__row">
        <Product
          id={1234}
          star={4}
          title={"Ion8 Leak Proof Slim Water Bottle, BPA-Free, 500 Ml"}
          price={12.24}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81aCbIIX3QL._AC_SL1500_.jpg"
          }
        />
        <Product
          id={1234}
          star={4}
          title={
            "Reusable Mop Pads Fit Swiffer WetJet, Prinoff Microfiber Replacement Refills Washable Floor Mopping and Cleaning Pros Pads - 2 Pack"
          }
          price={3.24}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81d7I1Amp2L._AC_SX679_.jpg"
          }
        />
        <Product
          id={1234}
          star={4}
          title={"Ion8 Leak Proof Slim Water Bottle, BPA-Free, 500 Ml"}
          price={12.24}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81aCbIIX3QL._AC_SL1500_.jpg"
          }
        />
      </div>
      <div className="home__row">
        <Product
          id={1234}
          star={4}
          title={"Ion8 Leak Proof Slim Water Bottle, BPA-Free, 500 Ml"}
          price={12.24}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81aCbIIX3QL._AC_SL1500_.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Home;
