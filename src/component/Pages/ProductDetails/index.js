import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((s) => s);
  const addToBasket = (data) => {
    dispatch({ type: "ADD_TO_BASKET", payload: data });
  };
  const addToFavorite = (data) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: data });
  };
  const { proId } = useParams();
  let findDetails = products.find((el) => el.id !== proId);
  console.log(findDetails, "ouiyftrdhdjyfu");
  return (
    <div className="flex items-center justify-evenly mt-[20px]">
      <img
        className=" w-[400px] rounded-sm"
        src={findDetails?.image}
        alt="img"
      />
      <div className="flex items-center flex-col">
        <h1 className="text-white">{findDetails?.title}</h1>
        <h1 className="text-white">{findDetails?.description}</h1>
        <h1 className="text-white">{findDetails?.price}</h1>
        <h1 className="text-white">{findDetails?.rating}</h1>
        <div className="flex mt-4">
          <button
            onClick={() => addToBasket()}
            type="button"
            class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            add To Basket
          </button>
          <button
            onClick={() => addToFavorite()}
            type="button"
            class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            add To favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
