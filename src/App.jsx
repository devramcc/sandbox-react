import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = (theme) => {
    setTheme(theme);
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <button
        onClick={() => handleChangeTheme("light")}
        className="btn btn-active btn-primary"
      >
        Light
      </button>
      <button
        onClick={() => handleChangeTheme("dark")}
        className="btn btn-active btn-primary"
      >
        Dark
      </button>
      <button
        onClick={() => handleChangeTheme("cupcake")}
        className="btn btn-active btn-primary"
      >
        Cupcake
      </button>
    </div>
  );
}
