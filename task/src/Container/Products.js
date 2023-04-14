import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "../Datas/ProductsList";
import { addItems } from "./Redux/Reducer/Card";

export default function Products() {
  const dispatch = useDispatch();
  const param = useParams();
  const navigate=useNavigate();
  const list = useSelector((state) => state.card.list);
  const item = ProductList.find((element) => element.id === parseInt(param.id));
  const element = list.find((value) => value.id === item.id);
  const addToCard = () => {
    dispatch(addItems({ ...item, count: 1 }));
  };

  return (
    <div className="cart m-2 ">
      <div className="mt-2">
        <img
          src={item.thumbnail}
          height={350}
          width={400}
          alt={item.title}
          className="image"
        />
      </div>

      <div className="card-body mt-3">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="mt-2">price:{`$${item.price}`}</h6>
        <h6 className="mt-2">Discount:{item.discountPercentage}%</h6>
        <h6 className="mt-2">Rating:{item.rating}</h6>
        <div className="mt-4">
          {item.stock > 0 ? (
            <>
              <button className="btn btn-success">Buy now</button>
              {element?.count > 0 ? (
                <button
                  className="ms-3 btn btn-outline-warning"
                  onClick={()=>navigate('/cart')}
                >
                  Go To Card
                </button>
              ) : (
                <button className="ms-3 btn btn-success" onClick={addToCard}>
                  Add To Card
                </button>
              )}
            </>
          ) : (
            <button className="btn btn-outline-danger">out of stock</button>
          )}
        </div>
      </div>
    </div>
  );
}
