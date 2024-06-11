import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        username: "Username",
        password: "Password",
        youcanlogin: "You can log in with your username and password",
        login: "Login",
        forgetPassword: "Did you forget your password ?",
        renewPassword: "Renew Password",
        takeRenewalLink:
          "You can get the password renewal link to your email address",
        mail: "Mail",
        sendRenewalLink: "Send Password Renewal Link",
        enterNewPassword: "Enter your new password",
        newPassword: "New Password",
        createAcc: "Create A New Account",
        haveAccount: "If you have an account, you can log in by clicking",
        phone: "phone",
        signup: "Sign Up",
      },
    },
    tr: {
      translation: {
        welcome: "Hoş Geldiniz",
        username: "Kullanıcı Adı",
        password: "Şifre",
        youcanlogin: "Kullanıcı adı ve parolanızla giriş yapabilirsiniz",
        login: "Giriş Yap",
        forgetPassword: "Şifrenizi mi unuttunuz ?",
        renewPassword: "Şifremi yenile",
        takeRenewalLink:
          "Mail adresinize şifre yenileme bağlantısı alabilirsiniz",
        mail: "Mail",
        sendRenewalLink: "Yenileme Bağlantısı Gönder",
        enterNewPassword: "Yeni şifrenizi giriniz ",
        newPassword: "Yeni şifre",
        createAcc: "Yeni Hesap Oluştur",
        haveAccount: "Hesabınız varsa tıklayarak giriş yapabilirsiniz",
        phone: "Telefon Numarası",
        signup: "Kaydol",
      },
    },
  },
  lng: localStorage.language,
  fallbackLng: localStorage.language,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
