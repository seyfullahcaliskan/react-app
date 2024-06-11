import React, { useEffect } from "react";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";

export default function Navbar(props) {
  useEffect(() => {}, []);
  return (
    <div class="h-screen w-full bg-white relative flex overflow-hidden">
      <aside class="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-red-500 dark:bg-gray-900 text-white">
        <div
          class="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer
         hover:text-red-800 dark:hover:text-gray-900 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
        >
          <i className="pi  pi-home" style={{ fontSize: "2rem" }}></i>
        </div>
        <div
          class="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer 
        hover:text-red-800 dark:hover:text-gray-900 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
        >
          <i className="pi pi-list" style={{ fontSize: "2rem" }}></i>
        </div>
        <div
          class="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer 
        hover:text-red-800 dark:hover:text-gray-900 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
        >
          <i className="pi pi-plus" style={{ fontSize: "2rem" }}></i>
        </div>
        <div
          class="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer 
        hover:text-red-800 dark:hover:text-gray-900 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
        >
          <i className="pi pi-spin pi-cog" style={{ fontSize: "2rem" }}></i>
        </div>
      </aside>
      <div class="w-full h-full flex flex-col justify-between">
        <header class="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-red-500 dark:bg-gray-900">
          <div class="flex flex-shrink-0 items-center space-x-4 text-white">
            <div class="flex flex-col items-end ">
              <div class="text-md font-medium ">Seyfullah Çalışkan</div>
              <div class="text-sm font-regular">Admin</div>
            </div>
            <Avatar
              className="p-overlay-badge bg-gray-600"
              icon="pi pi-user"
              size="xlarge"
              shape="circle"
            >
              <Badge className=" bg-gray-700 rounded-full w-5 " value="4" />
            </Avatar>
          </div>
        </header>
        <main class="max-w-full h-full flex relative overflow-y-hidden">
          <div
            class="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col 
          auto-cols-max gap-4 overflow-y-scroll"
          >
            {props.item}sa
          </div>
          <div className="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 text-center text-white bg-red-500 dark:bg-gray-900 h-16 flex items-center justify-center font-bold">
            2024
          </div>
        </main>
      </div>
    </div>
  );
}
