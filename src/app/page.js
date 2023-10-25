"use client";
import { useEffect, useState } from "react";
import Products from "./component/product";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "@/my-redux/cartslice";
import Mycart from "./cart/cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  let selector = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  const [Data, setData] = useState([]);
  const [qty, setQty] = useState(1);
  const [loader, setLoader] = useState(false);
  async function getProducts() {
    try {
      setLoader(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setLoader(false);
      setData(data);
    } catch (error) {
      toast.error("failed to fetch", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  const handleClick = (data) => {
    dispatch(addProduct(data));

    console.log(selector);
  };

  useEffect(() => {
    getProducts();
    console.log("one");
  }, []);

  return (
    <section className="flex">
      <div>
        <div>
          {loader ? (
            <span className="text-8xl font-bold m-3">loading....</span>
          ) : (
            Data.map((Product, i) => {
              return (
                <div key={i}>
                  <Products data={Product} />
                  <button
                    className="bg-black p-2 text-white mr-3"
                    onClick={() => {
                      handleClick({
                        products: Product,
                        quantity: qty,
                        myPrice: Product.price,
                      });
                    }}>
                    add to cart
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div>{selector.items.length > 0 ? <Mycart /> : ""}</div>
    </section>
  );
};

export default Home;
