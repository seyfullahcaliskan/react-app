import { React, useEffect, useRef, useState } from 'react';
import Keycloak from 'keycloak-js';

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const isRun = useRef(false);
  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;
    const client = new Keycloak(
      {
        url: 'http://localhost:8080',
        realm: 'Sefo',
        clientId: 'sefo-frontend',
      },
      []
    );
    client.init({ onLoad: 'login-required' }).then((res) => {
      console.log(res);
      setIsLogin(res);
    });
  });
  return isLogin;
};
export default useAuth;
