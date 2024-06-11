import { Button } from "primereact/button";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {}, []);
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
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
