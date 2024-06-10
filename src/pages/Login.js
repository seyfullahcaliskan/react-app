import "../css/login.css";
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Login = () => {
    const handleLogin = () => {
        // Giriş işlemleri burada yapılabilir
    };

    return (<>
    <div className="login-container">
            <h1>Login</h1>
            <div className="login-form">
                <InputText placeholder="Kullanıcı Adı" />
                <InputText placeholder="Şifre" type="password" />
                <Button label="Giriş Yap" onClick={handleLogin} />
            </div>
        </div>
        <div><img src="https://www.google.com/imgres?q=ara%C3%A7%20bak%C4%B1m&imgurl=https%3A%2F%2Fsm.shbdn.com%2Fassets%2Fauto360%2Fcommon%2Fx_565_424_periyodik-bakim-nasil-yapilir-ne-kadar-tutar-periyodik-bakim-nasil-yapilir-ne-kadar-tutar.jpg&imgrefurl=https%3A%2F%2Fwww.sahibinden.com%2Foto360%2Fperiyodik-bakim-nasil-yapilir-ne-kadar-tutar&docid=fP-iUyF3XXOjqM&tbnid=vXIk35_cLOormM&vet=12ahUKEwinrpL708uGAxVaQvEDHT9_AmgQM3oECGsQAA..i&w=565&h=424&hcb=2&ved=2ahUKEwinrpL708uGAxVaQvEDHT9_AmgQM3oECGsQAA" 
        alt="sa"/></div></>

        
    );
};

export default Login;
  