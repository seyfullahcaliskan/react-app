import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center relative w-full h-full">
      <i
        className="pi pi-car"
        style={{
          fontSize: "4rem",
          zIndex: 10,
          position: "absolute",
          //   width: "100px",
          //   height: "100px",
        }}
      ></i>

      <div
        style={{ width: "120px", height: "120px" }}
        className="w-24 h-24 border-8 border-gray-200 rounded-full animate-spin border-t-blue-900"
      ></div>
    </div>
  );
};

export default Loading;
