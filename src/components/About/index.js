import React from "react";
import { Button } from "react-bootstrap";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <main>
        <article>
          <div className="about-content">
            <h1>Who we are</h1>
            <p>
              Whether you are buying new or used, plain or luxurious,
              commonplace or rare, trendy or one-of-a-kind – if it exists in the
              world, it probably is for sale on Marketplace. Our mission is to
              be the world’s favorite destination for discovering great value
              and unique selection. We give sellers the platform, solutions, and
              support they need to grow their businesses and thrive. We measure
              our success by our customers' success.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="People representing the company"
          />
        </article>
        <article className="reverse">
          <div className="about-content">
            <h1>Diversity and Inclusion</h1>
            <p>
              Diversity and inclusion at Marketplace is about making sure that
              when people are part of our community—whether they are people who
              are interested in working here, global employees, or one of the
              millions of buyers and sellers who transact on our platform—they
              feel included and know that great opportunities are available to
              them—regardless of background.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/1325766/pexels-photo-1325766.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Showing diversity in a group of people"
          />
        </article>
        <article>
          <div className="about-content">
            <h1>Join our team</h1>
            <p>
              At Marketplace, we seek the very best engineers to help us build
              more economic opportunity for everyone. We work on some of the
              world’s most complex, highly scalable systems—which connect buyers
              with sellers all across the globe. There’s a purpose to what we’re
              doing, and we’re very passionate about it. See what it’s like to
              be an engineer at Marketplace.
            </p>
            <Button variant="warning" href="https://www.linkedin.com/in/melissathart/">
            Join us
          </Button>
          </div>
          <img
            src="https://images.pexels.com/photos/1251860/pexels-photo-1251860.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="person having a job interview"
          />
        </article>
      </main>
    </div>
  );
}
