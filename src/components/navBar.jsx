import React, { useEffect, useRef } from "react";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";

import i18n from "../i18n";

import { useNavigate } from "react-router-dom";
export default function Navbar(props) {
  const op = useRef(null);
  const navigate = useNavigate();
  function toggleTheme() {
    const isDarkModeEnabled =
      document.documentElement.classList.contains("dark");
    const newTheme = isDarkModeEnabled ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDarkModeEnabled);
  }
  const currentLanguage = i18n.language;
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };
  useEffect(() => {}, []);
  return (
    <>
      <div class="h-screen w-full bg-white relative flex overflow-hidden">
        <aside class="h-full w-16 flex flex-col space-y-4 items-center justify-center relative bg-red-500 dark:bg-gray-900 text-white">
          <div
            class="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer
         hover:text-red-800 dark:hover:text-gray-900 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
          >
            <i
              className="pi  pi-home"
              style={{ fontSize: "2rem" }}
              onClick={() => navigate(`/homepage`)}
            />
          </div>
          <div className="bg-white h-[2px] z-10 w-[60%] p-0 rounded-xl" />
          <div
            class="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer 
        hover:text-red-800 dark:hover:text-gray-900 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
          >
            <i className="pi pi-list" style={{ fontSize: "2rem" }}></i>
          </div>
          <div className="bg-white h-[2px] z-10 w-[60%] p-0 rounded-xl" />

          <div
            class="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer 
        hover:text-red-800 dark:hover:text-gray-900 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
          >
            <i className="pi pi-plus" style={{ fontSize: "2rem" }}></i>
          </div>
          <div className="bg-white h-[2px] z-10 w-[60%] p-0 rounded-xl" />

          <div
            class="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer 
        hover:text-red-800 dark:hover:text-gray-900 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
          >
            <i
              className={
                localStorage.theme === "dark" ? "pi pi-sun" : "pi pi-moon"
              }
              style={{ fontSize: "2rem" }}
              onClick={() => toggleTheme()}
            />
          </div>
          <div className="bg-white h-[2px] z-10 w-[60%] p-0 rounded-xl" />

          <div
            class="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer 
        hover:text-red-800 dark:hover:text-gray-900 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
          >
            <i
              className="pi pi-language"
              style={{ fontSize: "2rem" }}
              onClick={() =>
                currentLanguage === "tr"
                  ? changeLanguage("en")
                  : changeLanguage("tr")
              }
            />
          </div>

          {/* <div
          class="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer 
        hover:text-red-800 dark:hover:text-gray-900 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
        >
          <i
            onClick={() => navigate(`/settings`)}
            className="pi pi-spin pi-cog"
            style={{ fontSize: "2rem" }}
          ></i>
        </div> */}
        </aside>
        <div class="w-full h-full flex flex-col justify-between">
          <header class="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-red-500 dark:bg-gray-900">
            <div class="flex flex-shrink-0 items-center space-x-4 text-white">
              <div class="flex flex-col items-end ">
                <div class="text-md font-medium ">Seyfullah Çalışkan</div>
                <div class="text-sm font-regular">Admin</div>
              </div>
              <Avatar
                onClick={(e) => op.current.toggle(e)}
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
      <OverlayPanel className="shadow-2xl w-[10%]" ref={op}>
        {/* <img
          src={
            "https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg"
          }
          alt="Bamboo Watch"
        /> */}
        <div className=" flex flex-col justify-center space-y-1 items-center border-gray-400">
          <div className="bg-gray-500 h-[1px] w-[50%] " />

          <Button
            className="text-dark font-bold w-full h-12 hover:bg-gray-200 p-5  shadow-sm"
            label="Profil"
            icon="pi pi-user"
            // onClick={sendPasswordMail}
          />
          <div className="bg-gray-500 h-[1px] w-[50%] " />
          <Button
            className="text-dark font-bold w-full h-12 hover:bg-gray-200 p-5"
            label="test buton"
            icon="pi pi-user"
            // onClick={sendPasswordMail}
          />
          <div className="bg-gray-500 h-[1px]  w-[50%]  " />
          <Button
            className="text-dark font-bold w-full h-12 hover:bg-gray-200 p-5"
            label="test buton"
            icon="pi pi-user"
            // onClick={sendPasswordMail}
          />
          <div className="bg-gray-500 h-[1px]  w-[50%]  " />
          <Button
            className="text-dark font-bold w-full h-12 hover:bg-gray-200 p-5"
            label="test buton"
            icon="pi pi-user"
            // onClick={sendPasswordMail}
          />
          <div className="bg-gray-500 h-[1px]  w-[50%] " />
          <Button
            className="text-dark font-bold w-full h-12 hover:bg-gray-200 p-5"
            label="Çıkış"
            icon="pi pi-sign-out"
            // onClick={sendPasswordMail}
          />
          <div className="bg-gray-500 h-[1px] w-[50%]  " />
        </div>
      </OverlayPanel>
    </>
  );
}
