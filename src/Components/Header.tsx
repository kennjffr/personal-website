import { useState, useEffect } from "react";
import { Moon, Sun } from "react-feather";
import Cookies from "js-cookie";

const Header = () => {
  const [light, setLight] = useState<boolean>(false);
  const [spinning, setSpinning] = useState<boolean>(false);

  const buttonHandler = () => {
    if (spinning) return;
    setSpinning(true);

    const newLightMode = !light;
    setLight(newLightMode);

    document.documentElement.classList.toggle("light", newLightMode);
    Cookies.set("lightMode", newLightMode ? "true" : "false", { expires: 365 });

    setTimeout(() => {
      setSpinning(false);
    }, 1000);
  };

  useEffect(() => {
    const isLightModeActive = document.documentElement.classList.contains("light");
    setLight(isLightModeActive);
  }, []);

  return (
    <div className="p-10 border-b border-gruvbox-bg1 text-gruvbox-fg4">
      <div className="flex max-w-6xl items-center justify-between content-evenly mx-auto px-8">
        <a
          href="/"
          className="text-2xl hover:-translate-y-1 transition-transform duration-300 hidden md:contents"
          aria-label="Home"
        >
          👋
        </a>
        <div className="flex flex-row align-middle">
        </div>
        <button
          type="button"
          onClick={buttonHandler}
          className="focus:outline-none p-1 rounded-md hover:bg-gruvbox-bg2 transition-colors duration-200"
          aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
        >
          {light ? (
            <Moon
              className={`${spinning ? "animate-spin360" : ""
                } h-5 w-5 text-gruvbox-fg`}
            />
          ) : (
            <Sun
              className={`${spinning ? "animate-spin360" : ""
                } h-5 w-5 text-gruvbox-fg`}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
