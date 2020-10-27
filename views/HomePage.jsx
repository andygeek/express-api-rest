import React from "react";
import { Navbar } from "./components/Navbar";

export default function HomePage({ name }) {
  return (
    <>
      <Navbar />
      <link rel="stylesheet" href="/public/styles/HomePage.css" />
      <h1 className="home__title">Home Page</h1>
      <h3>Hello {name}</h3>
    </>
  );
}
