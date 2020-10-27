import React from "react";
import { Navbar } from "./components/Navbar";

export default function HomePage({ products }) {
  return (
    <>
      <Navbar />
      <link rel="stylesheet" href="/public/styles/HomePage.css" />
      <h1 className="home__title">Home Page</h1>
      {products.map((product, index) => (
        <li key={index}>{product.name}</li>
      ))}
    </>
  );
}
