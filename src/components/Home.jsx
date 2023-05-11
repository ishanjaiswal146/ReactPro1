import React from "react";
import vg from "../assests/2.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Five problem one Solution</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            aliquid quisquam cumque error, quo et dolores fugit quaerat
            consectetur, aut, nobis ea assumenda sapiente deserunt veritatis?
            Quod modi repudiandae incidunt ab dolores accusantium?
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            labore reprehenderit iure ipsam modi eligendi ea officia! Illo
            libero, quam, error blanditiis, obcaecati ullam minus eveniet
            possimus laudantium accusantium inventore illum nulla quidem officia
            at explicabo similique molestiae. Quidem facilis perferendis numquam
            dolore tempore!
          </p>
        </div>
      </div>
      <div className="home4" id="brands ">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
