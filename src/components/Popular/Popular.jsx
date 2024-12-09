import React, { useState } from "react";
import styles from "./Popular.module.css";

const cities = [
  {
    name: "New York",
    image: "/goheaven/images/114.jpg",
    description:
      "The city that never sleeps, offering iconic landmarks like the Statue of Liberty and Times Square.",
    details: {
      text: "This place is one of the most attractive destinations, offering a perfect blend of natural beauty and tranquility. The crystal-clear waters, surrounded by lush greenery, create a serene environment that feels like a hidden paradise. Visitors can explore stunning landscapes, vibrant wildlife, and breathtaking views. Whether you're seeking adventure or relaxation, this place provides the perfect escape from the ordinary. dignissimos perspiciatis consequatur, impedit doloribus.",
      images: [
        "/goheaven/images/nyc1.jpg",
        "/goheaven/images/nyc2.jpg",
        "/goheaven/images/nyc3.jpg",
      ],
    },
  },
  {
    name: "California",
    image: "/goheaven/images/113.jpg",
    description:
      "From the beaches to the mountains, California offers an incredible range of activities.",
    details: {
      text: "This place is one of the most attractive destinations, offering a perfect blend of natural beauty and tranquility. The crystal-clear waters, surrounded by lush greenery, create a serene environment that feels like a hidden paradise. Visitors can explore stunning landscapes, vibrant wildlife, and breathtaking views. Whether you're seeking adventure or relaxation, this place provides the perfect escape from the ordinary. dignissimos perspiciatis consequatur, impedit doloribus.",
      images: [
        "/goheaven/images/california1.jpg",
        "/goheaven/california2.jpg",
        "/goheaven/california3.jpg",
      ],
    },
  },
  {
    name: "Alaska",
    image: "/goheaven/images/115.jpg",
    description:
      "Known for its pristine nature, wildlife, and the stunning Denali National Park.",
    details: {
      text: "This place is one of the most attractive destinations, offering a perfect blend of natural beauty and tranquility. The crystal-clear waters, surrounded by lush greenery, create a serene environment that feels like a hidden paradise. Visitors can explore stunning landscapes, vibrant wildlife, and breathtaking views. Whether you're seeking adventure or relaxation, this place provides the perfect escape from the ordinary. dignissimos perspiciatis consequatur, impedit doloribus.",
      images: [
        "/goheaven/images/alaska1.jpg",
        "/goheaven/images/alaska2.jpg",
        "/goheaven/images/alaska3.jpg",
      ],
    },
  },

  {
    name: "Sidney",
    image: "/goheaven/images/116.jpg",
    description:
      "A vibrant city known for the Sydney Opera House and its stunning harbor views.",
    details: {
      text: "This place is one of the most attractive destinations, offering a perfect blend of natural beauty and tranquility. The crystal-clear waters, surrounded by lush greenery, create a serene environment that feels like a hidden paradise. Visitors can explore stunning landscapes, vibrant wildlife, and breathtaking views. Whether you're seeking adventure or relaxation, this place provides the perfect escape from the ordinary. dignissimos perspiciatis consequatur, impedit doloribus.",
      images: [
        "/goheaven/images/sidney1.jpg",
        "/goheaven/images/sidney2.jpg",
        "/goheaven/images/sidney3.jpg",
      ],
    },
  },
  {
    name: "Dubai",
    image: "/goheaven/images/111.jpg",
    description:
      "Famous for its luxury shopping, modern architecture, and vibrant nightlife scene.",
    details: {
      text: "This place is one of the most attractive destinations, offering a perfect blend of natural beauty and tranquility. The crystal-clear waters, surrounded by lush greenery, create a serene environment that feels like a hidden paradise. Visitors can explore stunning landscapes, vibrant wildlife, and breathtaking views. Whether you're seeking adventure or relaxation, this place provides the perfect escape from the ordinary. dignissimos perspiciatis consequatur, impedit doloribus.",
      images: [
        "/goheaven/images/dubai1.jpg",
        "/goheaven/images/dubai2.jpg",
        "/goheaven/images/dubai3.jpg",
      ],
    },
  },
  {
    name: "London",
    image: "/goheaven/images/117.jpg",
    description:
      "A city full of history, from the Tower of London to Buckingham Palace and the West End theatre.",
    details: {
      text: "This place is one of the most attractive destinations, offering a perfect blend of natural beauty and tranquility. The crystal-clear waters, surrounded by lush greenery, create a serene environment that feels like a hidden paradise. Visitors can explore stunning landscapes, vibrant wildlife, and breathtaking views. Whether you're seeking adventure or relaxation, this place provides the perfect escape from the ordinary. dignissimos perspiciatis consequatur, impedit doloribus.",
      images: [
        "/goheaven/images/london1.jpg",
        "/goheaven/images/london2.jpg",
        "/goheaven/images/london3.jpg",
      ],
    },
  },
  {
    name: "Tokyo",
    image: "/goheaven/images/112.jpg",
    description:
      "A futuristic metropolis blending traditional culture with cutting-edge technology.",
    details: {
      text: "This place is one of the most attractive destinations, offering a perfect blend of natural beauty and tranquility. The crystal-clear waters, surrounded by lush greenery, create a serene environment that feels like a hidden paradise. Visitors can explore stunning landscapes, vibrant wildlife, and breathtaking views. Whether you're seeking adventure or relaxation, this place provides the perfect escape from the ordinary. dignissimos perspiciatis consequatur, impedit doloribus.",
      images: [
        "/goheaven/images/tokyo1.jpg",
        "/goheaven/images/tokyo2.jpg",
        "/goheaven/images/tokyo3.jpg",
      ],
    },
  },
];

const Popular = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (
    <div className={styles.popularCities}>
      <h1>Explore Popular Cities</h1>
      <p>Discover stunning destinations and plan your next adventure.</p>
      <div className={styles.cityButtons}>
        {cities.map((city) => (
          <button
            key={city.name}
            className={`${styles.cityButton} ${
              selectedCity.name === city.name ? styles.activeButton : ""
            }`}
            onClick={() => {
              setSelectedCity(city);
              setShowDetails(false);
            }}
          >
            {city.name}
          </button>
        ))}
      </div>
      <div className={styles.cityContent}>
        <div className={styles.cityImage}>
          <img src={selectedCity.image} alt={selectedCity.name} />
        </div>
        <div className={styles.cityInfo}>
          <h3>{selectedCity.name}</h3>
          <p>{selectedCity.description}</p>
          <button className={styles.detailsButton} onClick={toggleDetails}>
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
          {showDetails && (
            <div className={styles.cityDetails}>
              <p>{selectedCity.details.text}</p>
              <div className={styles.detailImages}>
                {selectedCity.details.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${selectedCity.name} ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popular;
