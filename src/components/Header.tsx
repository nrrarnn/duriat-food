type NavigateType = {
  id: number;
  name: string;
  nav: string

}

const Header = () => {
  return(
    <>
      <header className="h-20 font-poppins flex items-center justify-between px-10 sm:px-32">
        <div className="font-extrabold text-2xl text-orange-400">DuriatFood</div>
        <div className="flex list-none gap-6">
          {
            navigate.map((val) => (
              <li key={val.id}>{val.name}</li>
            ))
          }
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
    name:"Testi",
    nav: "test"
  },
  {
    id: 1,
    name:"Home",
    nav: "home"
  },
]

export default Header