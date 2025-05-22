import { ImageAndVideo } from "../models/imageandvideo.js";

const getTextData = (req, res) => {
    const values = [
    {
      subject: "Size & Fit",
      description:
        "Getting the right fit is key! Our comprehensive size guide (link to size guide) provides detailed measurements and conversion charts to help you choose with confidence. Plus, each product page features specific fit notes from our team, letting you know if the item is designed for a relaxed, regular, or slim fit, and if it tends to run true to size, small, or large. Still unsure? Our customer service team is happy to help with personalized advice!",
    },
    {
      subject: "Delivery & Returns",
      description:
        "Delivery: We offer several convenient shipping options to get your new favorites to you quickly. Choose from standard, express, or expedited delivery at checkout. You'll receive tracking information as soon as your order ships.\n\nReturns: Not quite right? No problem! We offer free returns on eligible items within 30 days of purchase. Simply initiate a return through our easy online portal, and we'll guide you through the process for a refund or exchange. For full details on our return policy and eligibility, please visit our Returns & Exchanges page (link to policy).",
    },
    {
      subject: "How This Was Made",
      description:
        "Designed with passion and precision, this item showcases our dedication to quality craftsmanship. From the initial sketch to the final stitch, every detail was carefully considered. We work with skilled artisans who bring our visions to life, ensuring each piece is made to last and designed to be loved.",
    },
  ];

  res.status(200)
  .json(values)
}

const getProductImages = (req, res) => {
    const imageUrls = [
    "https://res.cloudinary.com/dhrkajjwf/image/upload/v1747838102/pexels-luchik-14994091_kozary.jpg",
    "https://res.cloudinary.com/dhrkajjwf/image/upload/v1747838108/pexels-cottonbro-4937452_necmhs.jpg",
    "https://res.cloudinary.com/dhrkajjwf/image/upload/v1747838126/pexels-lepta-studio-333887315-13991626_hm8ymu.jpg",
  ];

  res.status(200)
  .json(imageUrls)
}



export { getTextData, getProductImages };