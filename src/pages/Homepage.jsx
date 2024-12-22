import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"; // Correct the relative path if needed

const Homepage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "HONDA SCOOTER",
      price: "₱1,200.00",
      image: "./honda1.jpg",
      description: "A reliable and efficient scooter for everyday use.",
    },
    {
      id: 2,
      name: "HONDA CBR1000",
      price: "₱1,500.00",
      image: "./honda2.jpg",
      description: "A high-performance sports bike for thrill-seekers.",
    },
    {
      id: 3,
      name: "HONDA CRF150",
      price: "₱1,800.00",
      image: "./honda3.jpg",
      description: "An off-road bike built for adventure.",
    },
    {
      id: 4,
      name: "HONDA FOUR WHEEL",
      price: "₱1,500.00",
      image: "./honda4.jpg",
      description: "A powerful four-wheeler for heavy-duty tasks.",
    },
    {
      id: 5,
      name: "HONDA REBEL250",
      price: "₱1,500.00",
      image: "./honda5.jpg",
      description: "A classic cruiser with a modern touch.",
    },
    {
      id: 6,
      name: "HONDA RS125",
      price: "₱1,500.00",
      image: "./honda6.jpg",
      description: "A lightweight and agile bike for city riding.",
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Include the Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-[url('/motor1.jpg')] bg-no-repeat w-full h-full text-black text-center py-52">
        <div className="max-w-screen-lg mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to JOSep-
            <span className="hover:text-lime-500 text-black">[Shop]</span>
          </h1>
          <p className="text-lg mb-8 border-s-black">
          Diri namo unsa paman enyo G'pangita!! D mo m0-Shop bahala mo
          </p>
          <a
            href="products"
            className="bg-slate-800 text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-gray-400 transition duration-300"
          >
            Browse Products
          </a>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Homepage;
