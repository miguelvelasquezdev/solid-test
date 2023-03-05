import { createEffect, createSignal } from "solid-js";

const initializeTheme = () => {
  let theme;
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme") as "Light 🌝" | "Dark 🌚";
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "Dark 🌚";
  } else {
    theme = "Light 🌝";
  }
  return theme;
};

const Header = () => {
  const [theme, setTheme] = createSignal<string>(initializeTheme());

  createEffect(() => {
    const root = document.documentElement;
    if (theme() === "Light 🌝") {
      root.classList.remove("theme-dark");
      localStorage.setItem("theme", "Light 🌝");
    } else {
      root.classList.add("theme-dark");
      localStorage.setItem("theme", "Dark 🌚");
    }
  });

  return (
    <div class='flex p-5 justify-end '>
      <button onClick={() => setTheme((t) => (t === "Light 🌝" ? "Dark 🌚" : "Light 🌝"))}>{theme()}</button>
    </div>
  );
};

export default Header;
