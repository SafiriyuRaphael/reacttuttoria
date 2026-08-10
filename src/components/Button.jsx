import React from "react";

// dry - do no repeat yourself
// props
const Button = ({ label, icon, type = "primary" }) => {
  return (
    <button className={`btn ${type === "primary" ? "white" : "dark"}`}>
      {type === "primary" && <span>✅</span>}
      <span>{label}</span>
      <span>{icon}</span>
      {type === "primary" ? <span>...</span> : <span> 💨</span>}
    </button>
  );
};

export default Button;
