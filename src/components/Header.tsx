import { useEffect, useState } from "react";

type NavigateType = {
  id: number;
  name: string;
  nav: string

}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return(
    <>
      <header className={`fixed w-full transition-all duration-300 ${isScrolled ? 'backdrop-blur-md shadow-md bg-white/50' : 'bg-transparent'}`}>
        <div className="py-6 font-poppins flex items-center justify-between padding">
          <div className="font-extrabold text-2xl text-orange-400">DuriatFood</div>
          <div className="flex list-none gap-6 pr-24">
            {
              navigate.map((val) => (
                <li key={val.id}>{val.name}</li>
              ))
            }
          </div>
        </div>
      </header>
    </>
  )
}

const navigate: NavigateType[] = [
  {
    id: 1,
    name:"Home",
    nav: "home"
  },
  {
    id: 2,
    name:"About",
    nav: "about"
  },
  {
    id: 3,
    name:"Menu",
    nav: "test"
  },
  {
    id: 1,
    name:"Contact",
    nav: "home"
  },
]

export default Header