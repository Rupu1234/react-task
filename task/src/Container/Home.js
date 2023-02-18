import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Cart from "./Cart";

export default function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Products/:id" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
