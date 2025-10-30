import React from "react";

const ProgressBar = () => {
  return (
    <div className="flex items-center justify-center gap-3 mt-16">
      <div
        style={{
          width: "31px",
          height: "11px",
          borderRadius: "48px",
          backgroundColor: "#55B000", 
        }}
      ></div>

      <div
        style={{
          width: "11px",
          height: "11px",
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          opacity: 0.8,
        }}
      ></div>

      <div
        style={{
          width: "11px",
          height: "11px",
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          opacity: 0.8,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
