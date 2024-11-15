import { Outlet, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "../redux/slices/themeSlice.js";
import {
  Bars3Icon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline/index.js";
import { useState } from "react";

export default function DashboardLayout() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themes.theme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(updateTheme(newTheme));
  };

  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-screen min-h-screen flex flex-row">
      <div
        className={`${
          isOpen ? "w-96" : "w-0"
        } bg-primary-content rounded-lg shadow-lg p-2 transition-all duration-300 ease-in-out transform ${
          isOpen ? "" : "translate-x[-100%] invisible"
        }`}
        style={{
          overflow: "hidden",
        }}
      >
        {isOpen && (
          <aside className="flex flex-col p-2 gap-2">
            <button className="btn btn-sm btn-primary">Button 1</button>
            <button className="btn btn-sm btn-secondary">Button 2</button>
          </aside>
        )}
      </div>
      <div className="w-full flex flex-col transition-all duration-300 ease-in-out">
        <header className="flex flex-row justify-between items-center gap-3 bg-secondary-content p-2 h-16 shadow-lg rounded-lg">
          <button onClick={toggleSideBar} className="p-1 size-10">
            <Bars3Icon />
          </button>
          <div className="flex flex-row items-center gap-3">
            <button
              className="rounded-full p-2 border-2 border-current"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <MoonIcon className="size-7" />
              ) : (
                <SunIcon className="size-7" />
              )}
            </button>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "btn btn-active btn-primary" : "btn btn-primary"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/form"
              className={({ isActive }) =>
                isActive ? "btn btn-active btn-primary" : "btn btn-primary"
              }
            >
              Register
            </NavLink>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
