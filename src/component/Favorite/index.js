import React from "react";
import { useSelector } from "react-redux";
import GoTobasket from "../GoTobasket";

const Favorite = () => {
  const { favorite } = useSelector((s) => s);
  return (
    <div>
      <div className="">
        <div className="container ">
          <div className=" overflow-y-auto flex items-center flex-wrap  gap-4 mt-3">
            {favorite.map((el) => (
              <GoTobasket el={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
