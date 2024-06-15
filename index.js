const images = {
  fruit: {
    f1: {
      src: "./images/f1.jpg",
      alt: "Image Not found",
      description: "Explore a variety of juicy fruits from around the world",
    },
    f2: {
      src: "./images/f2.jpg",
      alt: "Image Not found",
      description: "Explore a variety of juicy fruits from around the world",
    },
    f3: {
      src: "./images/f3.jpg",
      alt: "Image Not found",
      description: "Explore a variety of juicy fruits from around the world",
    },
    f4: {
      src: "./images/f4.jpg",
      alt: "Image Not found",
      description: "Explore a variety of juicy fruits from around the world",
    },
    f5: {
      src: "./images/f5.jpg",
      alt: "Image Not found",
      description: "Explore a variety of juicy fruits from around the world",
    },
    f6: {
      src: "./images/f6.jpg",
      alt: "Image Not found",
      description: "Explore a variety of juicy fruits from around the world",
    },
    f7: {
      src: "./images/f7.jpg",
      alt: "Image Not found",
      description: "Explore a variety of juicy fruits from around the world",
    },
    f8: {
      src: "./images/f8.jpg",
      alt: "Image Not found",
      description: "Explore a variety of juicy fruits from around the world",
    },
    f9: {
      src: "./images/f9.jpg",
      alt: "Image Not found",
      description: "Explore a variety of juicy fruits from around the world",
    },
  },
  flower: {
    fl1: {
      src: "./images/fl1.jpg",
      alt: "Image Not found",
      description:
        "Discover the beauty of colorful and fragrant flowers in full bloom.",
    },
    fl2: {
      src: "./images/fl2.jpg",
      alt: "Image Not found",
      description:
        "Discover the beauty of colorful and fragrant flowers in full bloom.",
    },
    fl3: {
      src: "./images/fl3.jpg",
      alt: "Image Not found",
      description:
        "Discover the beauty of colorful and fragrant flowers in full bloom.",
    },
    fl4: {
      src: "./images/fl4.jpg",
      alt: "Image Not found",
      description:
        "Discover the beauty of colorful and fragrant flowers in full bloom.",
    },
    fl5: {
      src: "./images/fl5.jpg",
      alt: "Image Not found",
      description:
        "Discover the beauty of colorful and fragrant flowers in full bloom.",
    },
    fl6: {
      src: "./images/fl6.jpg",
      alt: "Image Not found",
      description:
        "Discover the beauty of colorful and fragrant flowers in full bloom.",
    },
    fl7: {
      src: "./images/fl7.jpg",
      alt: "Image Not found",
      description:
        "Discover the beauty of colorful and fragrant flowers in full bloom.",
    },
    fl8: {
      src: "./images/fl8.jpg",
      alt: "Image Not found",
      description:
        "Discover the beauty of colorful and fragrant flowers in full bloom.",
    },
  },
  vegetable: {
    v1: {
      src: "./images/v1.jpg",
      alt: "Image Not found",
      description:
        "Delve into fresh and nutritious vegetables for a healthy lifestyle",
    },
    v2: {
      src: "./images/v2.jpg",
      alt: "Image Not found",
      description:
        "Delve into fresh and nutritious vegetables for a healthy lifestyle",
    },
    v3: {
      src: "./images/v3.jpg",
      alt: "Image Not found",
      description:
        "Delve into fresh and nutritious vegetables for a healthy lifestyle",
    },
    v4: {
      src: "./images/v4.jpg",
      alt: "Image Not found",
      description:
        "Delve into fresh and nutritious vegetables for a healthy lifestyle",
    },
    v5: {
      src: "./images/v5.jpg",
      alt: "Image Not found",
      description:
        "Delve into fresh and nutritious vegetables for a healthy lifestyle",
    },
    v6: {
      src: "./images/v6.jpg",
      alt: "Image Not found",
      description:
        "Delve into fresh and nutritious vegetables for a healthy lifestyle",
    },
    v7: {
      src: "./images/v7.jpg",
      alt: "Image Not found",
      description:
        "Delve into fresh and nutritious vegetables for a healthy lifestyle",
    },
    v8: {
      src: "./images/v8.jpg",
      alt: "Image Not found",
      description:
        "Delve into fresh and nutritious vegetables for a healthy lifestyle",
    },
  },
  plant: {
    p1: {
      src: "./images/p1.jpg",
      alt: "Image Not found",
      description:
        "Admire the lush greenery and diverse plants thriving in different climates",
    },
    p2: {
      src: "./images/p2.jpg",
      alt: "Image Not found",
      description:
        "Admire the lush greenery and diverse plants thriving in different climates",
    },
    p3: {
      src: "./images/p3.jpg",
      alt: "Image Not found",
      description:
        "Admire the lush greenery and diverse plants thriving in different climates",
    },
    p4: {
      src: "./images/p4.jpg",
      alt: "Image Not found",
      description:
        "Admire the lush greenery and diverse plants thriving in different climates",
    },
    p5: {
      src: "./images/p5.jpg",
      alt: "Image Not found",
      description:
        "Admire the lush greenery and diverse plants thriving in different climates",
    },
    p6: {
      src: "./images/p6.jpg",
      alt: "Image Not found",
      description:
        "Admire the lush greenery and diverse plants thriving in different climates",
    },
    p7: {
      src: "./images/p7.jpg",
      alt: "Image Not found",
      description:
        "Admire the lush greenery and diverse plants thriving in different climates",
    },
    p8: {
      src: "./images/p8.jpg",
      alt: "Image Not found",
      description:
        "Admire the lush greenery and diverse plants thriving in different climates",
    },
    p9: {
      src: "./images/p9.jpg",
      alt: "Image Not found",
      description:
        "Admire the lush greenery and diverse plants thriving in different climates",
    },
    p10: {
      src: "./images/p10.jpg",
      alt: "Image Not found",
      description:
        "Admire the lush greenery and diverse plants thriving in different climates",
    },
    p11: {
      src: "./images/p11.jpg",
      alt: "Image Not found",
      description:
        "Admire the lush greenery and diverse plants thriving in different climates",
    },
    p12: {
      src: "./images/p12.jpg",
      alt: "Image Not found",
      description:
        "Admire the lush greenery and diverse plants thriving in different climates",
    },
  },
};

// Function to return all image paths
function AllImages() {
  const allImages = [];
  for (const category in images) {
    const img = images[category];
    for (const value of Object.values(img)) {
      allImages.push(value);
    }
  }
  return allImages;
}

function fruits() {
  return Object.values(images["fruit"]);
}

function flowers() {
  return Object.values(images["flower"]);
}

function vegetables() {
  return Object.values(images["vegetable"]);
}
