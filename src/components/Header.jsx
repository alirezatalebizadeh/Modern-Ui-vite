import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-[#0E0C15]/90 lg:backdrop-blur-sm ${openNavigation ? "bg-[#0E0C15]" : "bg-[#0E0C15]/90 backdrop-blur-sm "
        }`}
    >
      <div className={`flex flex-row-reverse items-center justify-between w-full px-5 py-2 lg:px-7.5 xl:px-10 max-lg:py-4`}>
        <a className="block w-[12rem] xl:ml-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-[#0E0C15] lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-[#FFFFFF] transition-colors hover:text-[#AC6AFF] ${item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-ml-0.25 lg:text-xs lg:font-semibold 
                  ${item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-[#FFFFFF] xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>


        <div className="flex flex-row-reverse items-center gap-3">
          <a
            href="/signup"
            className="button hidden mx-8 text-[#FFFFFF]/50 transition-colors hover:text-[#FFFFFF] lg:block"
          >
            ساخت اکانت جدید
          </a>
          <Button className="hidden lg:flex" href="/login">
            ورود
          </Button>

          <Button
            className="lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
