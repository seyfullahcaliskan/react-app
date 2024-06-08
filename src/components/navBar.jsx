import React from "react";
import HomePage from "../pages/homePage";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import Loading from "./loading";

export default function Navbar(page) {
  console.log(page);
  return (
    <div class="h-screen w-full bg-white relative flex overflow-hidden">
      {/* <!-- Sidebar --> */}
      <aside class="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
        {/* <!-- Profile --> */}
        <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <i className="pi  pi-home" style={{ fontSize: "1.6rem" }}></i>
        </div>

        {/* <!-- Courses --> */}
        <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <i className="pi pi-list" style={{ fontSize: "1.6rem" }}></i>
        </div>

        {/* <!-- Theme --> */}
        <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <i className="pi pi-plus" style={{ fontSize: "1.6rem" }}></i>
        </div>

        {/* <!-- Configuration --> */}
        <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <i className="pi pi-spin pi-cog" style={{ fontSize: "1.6rem" }}></i>
        </div>
      </aside>

      <div class="w-full h-full flex flex-col justify-between">
        {/* <!-- Header --> */}
        <header class="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
          {/* <!-- Informação --> */}
          <div class="flex flex-shrink-0 items-center space-x-4 text-white">
            {/* <!-- Texto --> */}
            <div class="flex flex-col items-end ">
              {/* <!-- Nome --> */}
              <div class="text-md font-medium ">Seyfullah Çalışkan</div>
              {/* <!-- Título --> */}
              <div class="text-sm font-regular">Admin</div>
            </div>

            {/* <!-- Foto --> */}
            {/* <div class="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>, */}
            <Avatar
              className="p-overlay-badge"
              icon="pi pi-user"
              size="xlarge"
              shape="circle"
            >
              <Badge className=" bg-red-600 rounded-full w-5 " value="4" />
            </Avatar>
          </div>
        </header>

        {/* <!-- Main --> */}
        <main class="max-w-full h-full flex relative overflow-y-hidden">
          {/* <!-- Container --> */}
          <div class="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
            {/* <!-- Container --> */}
            <HomePage />
            {/* <Loading /> */}
          </div>
          <div className="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 text-center text-white bg-gray-800">
            2024
          </div>
        </main>
      </div>
    </div>
  );
}
