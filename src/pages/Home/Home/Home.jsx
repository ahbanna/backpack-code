import React from "react";
import Jsxnote from "../Jsxnote/Jsxnote";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <h2>This is home page</h2>
    </div>
  );
};

export default Home;
