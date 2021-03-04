import React from "react";
import { useSelector } from "react-redux";

function Model() {
  const modelContent = useSelector((state) => state.register.modelContent);
  console.log(modelContent);
  return (
    <div>
      <h2>{modelContent}</h2>
    </div>
  );
}

export default Model;
