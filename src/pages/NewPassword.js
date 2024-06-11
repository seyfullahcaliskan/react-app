import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";

const NewPassword = () => {
  const [value, setValue] = useState();
  const handleLogin = () => {
    // Giriş işlemleri burada yapılabilir
  };

  return (
    <div className="bg-gradient-to-bl from-red-100 via-red-500 to-red-900 absolute left-0 top-0 z-0 w-full  h-full  bg-cover bg-center">
      {/* <img
        className="absolute left-0 top-0 z-0 w-full h-full bg-cover bg-center"
        width="100%"
        src="https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/warped-space-chromebook-wallpaper.jpg"
        alt=""
      /> */}

      <div
        className="font-bold leading-tight font-firaSans text-white absolute
       sm:top-[10%] sm:left-[10%] sm:w-[50%]
       md:top-[10%] md:left-[10%] md:w-[50%]
       lg:top-[10%] lg:left-[10%] lg:w-[50%]
       xl:top-[10%] xl:left-[10%] xl:w-[50%]
       top-[10%] left-[10%] w-[50%]
      text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-10xl"
      >
        {/* <div class=" bg-red-200 xs:bg-green-500 sm:bg-blue-500 md:bg-yellow-500
     lg:bg-purple-500 xl:bg-pink-500">
      DENEME
      </div>     */}
        {/* ...Şifremi unuttum */}
      </div>
      <div
        className="absolute bg-white z-0 rounded-3xl p-2 shadow-2xl shadow-black h-fit
      xl:w-[30%] xl:top-[20%] xl:left-[35%]
      lg:w-[40%] lg:top-[20%] lg:left-[30%]
      md:w-[40%] md:top-[20%] md:left-[30%]
      sm:w-[50%] sm:top-[20%] sm:left-[25%]
      xs:w-[100%] xs:top-[20%] xs:left-[0%]
      w-[70%] top-[18%] left-[15%]"
      >
        <div className="flex justify-center h-24 xs:h-10">
          {/* <img  
        src="https://static.vecteezy.com/ti/gratis-vector/p3/4688271-sc-logo-letter-ontwerp-pictogram-sc-letters-met-kleurrijke-creatieve-swoosh-lijnen-vector.jpg"
        alt="" */}
          {/* /> */}
          <p className="bg-gradient-to-bl from-red-100 via-red-500 to-red-900 bg-clip-text text-transparent text-4xl font-bold text-center mt-10">
            LOGO
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-center flex flex-col items-center gap-y-4 py-4">
            <h1 className="font-firaSans font-bold text-3xl">Şifremi yenile</h1>
            <p
              className=" text-center text-secondary font-semibold
            hover:underline hover:text-primary-dark text-base"
            >
              Yeni şifrenizi giriniz
            </p>
          </div>
          <div className="mb-5 flex flex-col gap-y-8 w-full justify-center p-10 pt-4">
            <FloatLabel className="flex">
              <InputText
                className="h-14 border-red-500 rounded-5 border w-full rounded-lg shadow-lg shadow-gray"
                id="newPassword"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="password"
              />
              <label className="ml-5 font-semibold" htmlFor="newPassword">
                Yeni Şifre
              </label>
            </FloatLabel>

            <Button
              className=" bg-red-500 py-5 text-white font-medium w-[full] h-15 hover:bg-red-600 rounded-lg shadow-lg shadow-gray"
              label="Yenileme Bağlantısı Gönder"
              onClick={handleLogin}
            />
          </div>
        </div>
      </div>
      <div className="left-0 bottom-0 fixed w-[100%] h-[60px] z-10 flex bg-gradient-to-rt from-red-100 via-red-500 to-red-900 text-white flex justify-between items-center shadow-lg">
        <div className="ml-10 font-bold">2024</div>{" "}
        <div className="mr-10 font-bold">Seyfullah Çalışkan </div>
      </div>
    </div>
  );
};

export default NewPassword;
