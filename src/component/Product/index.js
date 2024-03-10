
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../data";
import GoTobasket from "../GoTobasket";
const Product = () => {
  const { products, basket } = useSelector((s) => s);
  const dispatch = useDispatch();
  const getProduct = (main) => {
    dispatch({ type: "GET_PRODUCT", payload: main });
  };
  useEffect(() => {
    getProduct(data);
  }, []);
  const addToBasket = (data) => {
    dispatch({ type: "ADD_TO_BASKET", payload: data });
  };
  return (
    <div className="">
      <div className="container ">
        <div className=" overflow-y-auto flex items-center flex-wrap  gap-4 mt-3">
          {products.map((el) => (
            <GoTobasket el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
