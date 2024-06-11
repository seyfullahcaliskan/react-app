import { Button } from "primereact/button";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  useEffect(() => {}, []);

  function toggleTheme() {
    const isDarkModeEnabled =
      document.documentElement.classList.contains("dark");
    const newTheme = isDarkModeEnabled ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDarkModeEnabled);
  }
  return (
    <div>
      <Button onClick={() => toggleTheme()}> darkmod</Button>
      HomePage
    </div>
  );
}
