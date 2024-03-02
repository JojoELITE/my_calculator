import React from "react";
import "./Button.css";

const Button = ({ operation, double, triple, label, click }) => {
  const classes = `button ${operation ? "operation" : ""} 
    ${
      double ? "double" : ""
    } 
  
    ${triple ? "triple" : ""}`;

  const handleClick = () => {
    if (click) {
      click(label);
    }
  };

  return (
    <button className={classes} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
