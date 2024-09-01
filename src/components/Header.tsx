import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type NavigateType = {
  id: number;
  name: string;
  nav: string;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed w-full transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md shadow-md bg-white/50" : "bg-transparent"
        } z-[9999]`}
      >
        <div className="py-6 font-poppins flex items-center justify-between padding">
          <div className="font-extrabold text-2xl text-orange-400">
            DuriatFood
          </div>
          
          {/* Tombol Hamburger untuk Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-orange-400 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>

          {/* Menu Navigasi untuk Desktop */}
          <div className="hidden md:flex list-none gap-6 pr-24">
            {navigate.map((val) => (
              <li
                key={val.id}
                className={`rounded-full px-4 py-1 transition duration-300 ${
                  isActive(`/${val.nav}`)
                    ? "bg-orange-400 text-white"
                    : "hover:bg-orange-400 hover:text-white"
                }`}
              >
                <Link to={`/${val.nav}`}>{val.name}</Link>
              </li>
            ))}
          </div>
        </div>
      </header>

      {/* Sidebar untuk Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-[9998]`}
      >
        <div className="p-6">
          
          <ul className="mt-16 list-none font-montserrat">
            {navigate.map((val) => (
              <li
                key={val.id}
                className={`rounded-full px-4 py-2 tr mt-4 ${
                  isActive(`/${val.nav}`)
                    ? "bg-orange-400 text-white"
                    : "hover:bg-orange-400 hover:text-white"
                }`}
              >
                <Link to={`/${val.nav}`} onClick={() => setSidebarOpen(false)}>
                  {val.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay saat sidebar terbuka */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[9997]"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

const navigate: NavigateType[] = [
  {
    id: 1,
    name: "Home",
    nav: "",
  },
  {
    id: 2,
    name: "About",
    nav: "about",
  },
  {
    id: 3,
    name: "Menu",
    nav: "menu",
  },
];

export default Header;
