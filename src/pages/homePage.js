import { Button } from "primereact/button";
import { useEffect } from "react";

export default function HomePage(page) {
  useEffect(() => {
    console.log(localStorage);
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.classList.add(currentTheme);
    }
  }, []);

  console.log("first");
  console.log(localStorage);
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
    console.log(localStorage);
  }
  return (
    <div>
      <Button onClick={() => toggleTheme()}> darkmod</Button>
      HomePage
    </div>
  );
}
