import React from "react";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home">
      <main>
        <h1 className="title">© MARKETPLACE</h1>
        <div className="home-display">
          <p>
            Marketplace is a Dutch multinational e-commerce corporation based in
            Amsterdam, the Netherlands, that facilitates consumer-to-consumer
            and business-to-consumer sales through its website. Marketplace was
            founded by Melissa 't Hart in the winter of 2020. Marketplace is a
            multibillion-dollar business with operations in about 30 countries,
            as of 2011.The company manages the Marketplace website, an online
            auction and shopping website in which people and businesses buy and
            sell a wide variety of goods and services worldwide. The website is
            free to use for buyers, but sellers are charged fees for listing
            items after a limited number of free listings, and again when those
            items are sold.{" "}
          </p>
          <p>
            Love,
            <br />
            Marketplace team
          </p>
          <br />
          <br />
          <h2 className="title-product-cat">Popular Product Categories</h2>
          <br />
        </div>
      </main>
    </div>
  );
}
