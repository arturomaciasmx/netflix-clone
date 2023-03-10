import NavigationItem from "@/components/NavigationItem";
import MobileNavigation from "@/components/MobileNavigation";
import AccountMenu from "@/components/AccountMenu";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";

const SCROLL_OFSET = 66;

const NavigationBar = () => {
  const [shownMobileNavigation, setShownMobileNavigation] = useState(false);
  const [shownAccountMenu, setShownAccountMenu] = useState(false);
  const [shownBackground, setShownBackground] = useState(false);

  const toggleMobileNavigation = useCallback(() => {
    setShownMobileNavigation((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShownAccountMenu((current) => !current);
  }, []);

  useEffect(() => {
    const handleShownBackground = () => {
      if (window.scrollY >= SCROLL_OFSET) {
        setShownBackground(true);
      } else {
        setShownBackground(false);
      }
    };
    window.addEventListener("scroll", handleShownBackground);

    return () => {
      window.removeEventListener("scroll", handleShownBackground);
    };
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`
        px-4
        md:px-16
        py-6
        flex
        items-center
        transition
        duration-500
        ${shownBackground ? "bg-zinc-900 bg-opacity-90" : ""} 
      `}
      >
        <img className="h-4 md:h-7" src="/images/logo.png" alt="" />

        <div
          className="
          ml-8
          gap-7
          hidden
          lg:flex 
        "
        >
          <NavigationItem label={"Home"} />
          <NavigationItem label={"Series"} />
          <NavigationItem label={"Films"} />
          <NavigationItem label={"New & Popular"} />
          <NavigationItem label={"My list"} />
          <NavigationItem label={"Label by language"} />
        </div>

        <div
          onClick={toggleMobileNavigation}
          className="lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              shownMobileNavigation ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileNavigation visible={shownMobileNavigation} />
        </div>
        <div className="flex ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex items-center relative gap-2 cursor-pointer"
          >
            <div className="w-6 h-6 md:w-10 md:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="profile" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                shownAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={shownAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
