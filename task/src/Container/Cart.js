import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Productlistitem from "../Components/Productlistitem";
import { modifyItem, removeItems } from "./Redux/Reducer/Card";

export default function Cart() {
 
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const list = useSelector((state) => state.card.list);
  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };

  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItems(item));
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }));
    }
  };

  const removeItemfromcard = (item) => {
    dispatch(removeItems(item));
  };
  return (
    <>
      {list.length > 0 ? (
      <>
          {list.map((item) => (
          <Productlistitem
            {...item}
            key={item.id}
            incrementItem={() => incrementItem(item)}
            decrementItem={() => decrementItem(item)}
            removeItem={() => removeItemfromcard(item)}
          />
          ))}
        <button className="btn btn-success"  onClick={()=> navigate('/checkout')}>Go To Checkout</button>
      </>
      ) : (
        <h3>no item in the card...</h3>
      )}
    </>
  );
}
