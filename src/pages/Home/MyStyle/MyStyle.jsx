import React from "react";
import "./MyStyle.css";
const inlineStyles = {
  color: "blue",
  fontSize: "16px",
  backgroundColor: "lightgray",
};
const MyStyle = () => {
  return (
    <div>
      <h2 style={inlineStyles}>Hello</h2>
      <h2
        style={{
          color: "#003300",
          fontSize: "24px",
          fontFamily: "Courier",
          backgroundColor: "lightgray",
          padding: "10px",
          borderRadius: "5px",
          backgroundImage: 'url("path/to/your/image.jpg")',
          backgroundSize: "cover",
          margin: "20px",
        }}
      >
        Greetings
      </h2>
      <h2 className="text-design">This is Text</h2>
    </div>
  );
};

export default MyStyle;
