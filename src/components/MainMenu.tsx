type MenuType = {
  id: number;
  name: string;
  description: string;
  image: string;
}

const MainMenu = () => { 
  return(
    <>
      <div className="padding w-full font-poppins py-24">
        <h2 className="text-orange-400 font-bold text-center">Menu Utama</h2>
        <h1 className="text-center text-slate-700 font-bold text-3xl">Pilihan Hidangan Terbaik</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((el) => (
            <div key={el.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={`./img/${el.image}.jpg`} alt={`${el.name}`} className="w-full h-64 object-cover rounded-t-lg"/>
              <h1 className="text-xl font-semibold mt-4">{el.name}</h1>
              <p className="text-gray-600 mt-2">{el.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

 const menuItems: MenuType[] = [
    {
      id: 1,
      name: "Tumpeng Nasi Kuning",
      description: "Nasi kuning lengkap dengan lauk-pauk tradisional.",
      image: "menu1",
    },
    {
      id: 2,
      name: "Nasi Liwet Kumplit",
      description: "Nasi liwet dengan ayam, tahu, tempe, dan sambal.",
      image: "menu2",
    },
    {
      id: 3,
      name: "Nasi Box",
      description: "Pilihan nasi box praktis untuk berbagai acara.",
      image: "menu3",
    }
  ];

export default MainMenu;