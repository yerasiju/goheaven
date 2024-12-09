import React from "react";
import Carousel from "../../components/Carousel/Carousel.jsx";

import styles from "./Home.module.css";

import Popular from "../../components/Popular/Popular.jsx";

const Home = () => (
  <div id="home">
    <div className={styles.videoContainer}>
      <video
        className={styles.backgroundVideo}
        src="/goheaven/video.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className={styles.overlay}>
        <div className={styles.overlayContent}>
          <h1>Explore the Heaven Near You</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            repudiandae laborum harum quo vero quas alias esse delectus, enim
            itaque ipsa adipisci facere temporibus a nulla assumenda blanditiis,
            quasi praesentium.
          </p>
          <button
            className={styles.exploreButton}
            onClick={() => navigate(`/goheaven/destinations`)}
          >
            <a href="/goheaven/destinations">Where to go?</a>
          </button>
        </div>
      </div>
    </div>

    <Popular />

    <Carousel />
  </div>
);

export default Home;
