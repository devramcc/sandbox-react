import { Outlet, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "../redux/slices/themeSlice.js";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline/index.js";

export default function DashboardLayout() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themes.theme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(updateTheme(newTheme));
  };

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <header className="flex flex-row justify-end items-center gap-3 bg-base-300 m-2 p-2 h-16 shadow-lg rounded-lg">
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
      </header>
      <Outlet />
    </div>
  );
}
