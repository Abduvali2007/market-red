import React from "react";
import { useSelector } from "react-redux";

const Bucket = () => {
  const { bucket } = useSelector((s) => s);
  console.log(bucket,"iyutytrytygui");
  return (
    <div>
      <h2>iughj</h2>
      <h2>lkbhvgjhbj</h2>
    </div>
  );
};

export default Bucket;
