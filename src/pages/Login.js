import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Login = () => {
  const handleLogin = () => {
    // Giriş işlemleri burada yapılabilir
  };

  return (
    <>
      <img
        className="absolute left-0 top-0 z-0 w-full h-full bg-cover bg-center"
        width="100%"
        src="https://t3.ftcdn.net/jpg/04/96/48/30/360_F_496483060_C9OG1wJpfmjMXcNmUBibmA9wYxxZCxnW.jpg"
        alt=""
      />
      <div
        className="text-auth-secondary font-bold text-3xl lg:text-7xl xl:text-8xl 
      leading-tight font-firaSans absolute top-[10%] left-[10%] w-10"
      >
        SEYFULLAH ÇALIŞKAN
      </div>
      <div
        className=" w-[20%] absolute top-[20%] left-[70%]
       bg-white z-0 rounded-3xl p-2 shadow-2xl shadow-black h-fit"
      >
        <div className="flex justify-center h-24">LOGO</div>
        <div className="flex flex-col">
          <div className="text-center flex flex-col items-center gap-y-3 py-5">
            <h1 className="font-firaSans font-bold text-3xl">Giriş Yap</h1>
            <p className="text-sm">
              Kullanıcı Adı ve Parolanızla Giriş Yapabilirsiniz
            </p>
          </div>
          <div className="mb-5 flex flex-col gap-y-6 w-full justify-center p-10 pt-4">
            <InputText
              className="flex items-center px-5 h-14 border-black 
              rounded-5 border w-full disabled:cursor-not-allowed 
              h-15 rounded-lg"
              placeholder="Kullanıcı Adı"
            />
            <InputText
              className="flex items-center px-5 h-14 border-black
              rounded-5 border w-full disabled:cursor-not-allowed  h-15 rounded-lg"
              placeholder="Şifre"
              type="password"
            />
            <Button
              className=" bg-red-400 py-5 rounded-5 cursor-pointer 
              disabled:cursor-not-allowed text-white text-base text-center font-medium w-full flex items-center justify-center 
              h-15 hover:bg-black rounded-lg"
              label="Giriş Yap"
              onClick={handleLogin}
            />
            <a
              className=" text-center text-secondary font-semibold 
            hover:underline hover:text-primary-dark text-base mb-20"
            >
              Şifremi unuttum
            </a>
          </div>
        </div>
      </div>
      <div className="left-0 bottom-0 fixed w-[100%] h-[80px] z-10 flex bg-red-400">
        FOOTER
      </div>
    </>
  );
};

export default Login;
