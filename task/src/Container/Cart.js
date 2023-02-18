import React from "react";
import { useSelector } from "react-redux";
// import Productlistitem from "../Components/Productlistitem";

export default function Cart() {
  
    const list = useSelector((state) => state.Cart.list);

  return (
    <>
       {list[0].title}
       </>
)}
