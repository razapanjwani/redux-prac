"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Products from "../component/product";
import {
  addProduct,
  removeProduct,
  increment,
  decrement,
} from "@/my-redux/cartslice";
const Mycart = () => {
  let selector = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  const add = (data) => {
    dispatch(increment(data));
  };

  const handleClick = (data) => {
    dispatch(removeProduct(data));
  };
  const subtract = (data) => {
    dispatch(decrement(data));
  };
  return (
    <>
      <div>
        <h1 className="mx-4 text-2xl font-bold uppercase">cartPage</h1>
        <span>
          {
            <p className="uppercase font-bold text-xl">
              totalprice:
              <span className="font-semibold text-lg">
                {selector.totalPrice}
              </span>
            </p>
          }
        </span>
        {selector.items.map((product, i) => {
          return (
            <div key={i}>
              <Products data={product} />
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    subtract(product.id);
                  }}
                  className="bg-black text-white py-1 px-3"
                >
                  -
                </button>
                <p className="font-semibold">{product.quantity}</p>
                <button
                  onClick={() => {
                    add(product.id);
                  }}
                  className="bg-black text-white py-1 px-3"
                >
                  +
                </button>
              </div>
              <p className="font-bold text-2xl my-2">{product.myPrice}</p>
              <button
                className="bg-black p-2 text-white mr-3"
                onClick={() => {
                  handleClick(product.id);
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Mycart;
