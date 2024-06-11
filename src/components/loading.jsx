import React, { useEffect } from "react";

const Loading = () => {
  useEffect(() => {}, []);
  return (
    <div className="flex justify-center items-center relative w-full h-full">
      <i
        className="pi pi-car"
        style={{
          color: localStorage.theme === "dark" ? "gray" : "red",
          fontSize: "4rem",
          zIndex: 10,
          position: "absolute",
          //   width: "100px",
          //   height: "100px",
        }}
      ></i>

      <div
        style={{ width: "120px", height: "120px" }}
        className="w-24 h-24 border-8 border-red-200 dark:border-gray-200 rounded-full animate-spin border-t-red-500 dark:border-t-gray-500"
      ></div>
    </div>
  );
};

export default Loading;
