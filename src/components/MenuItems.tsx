interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

const menuItems: MenuItem[] = [
  { id: 1, name: 'Tumpeng Bertema', description: 'Tumpeng nasi kuning dengan dekorasi sesuai tema acara.', image: 'menu1' },
  { id: 2, name: 'Nasi Liwet Kumplit', description: 'Nasi liwet dengan lauk pauk lengkap dan sambal.', image: 'menu2' },
  { id: 3, name: 'Nasi Box', description: 'Paket nasi box dengan pilihan lauk beragam.', image: 'menu3' },
  { id: 4, name: 'Nasi Liwet Box', description: 'Nasi liwet dalam kemasan box dengan lauk pilihan.', image: 'nasi-liwet-box' },
  { id: 5, name: 'Sale Pisang', description: 'Irisan pisang kering dengan rasa manis alami, camilan tradisional yang menggugah selera.', image: 'sale-pisang' },
  { id: 6, name: 'Kue Hari Raya', description: 'Aneka kue khas untuk perayaan hari raya.', image: 'kue-hari-raya' },
  { id: 7, name: 'Capcay', description: 'Sayuran segar dengan saus spesial.', image: 'capcay' },
  { id: 8, name: 'Ikan Nila Goreng', description: 'Ikan nila digoreng dengan bumbu spesial.', image: 'ikan-nila-goreng' },
  { id: 9, name: 'Ayam Bakar', description: 'Ayam bakar dengan bumbu meresap dan rasa nikmat.', image: 'ayam-bakar' },
  { id: 10, name: 'Ayam Goreng', description: 'Ayam goreng renyah dengan bumbu gurih.', image: 'ayam-goreng' },
  { id: 11, name: 'Tahu & Tempe', description: 'Tahu dan tempe goreng dengan bumbu pilihan.', image: 'tahu-tempe' },
  { id: 12, name: 'Ikan Lele', description: 'Ikan lele goreng dengan sambal terasi.', image: 'ikan-lele' },
  { id: 13, name: 'Lalapan dan Sambal', description: 'Aneka lalapan segar dengan sambal khas.', image: 'lalapan-sambal' },
  { id: 14, name: 'Karedok', description: 'Karedok segar dengan bumbu kacang yang khas.', image: 'karedok' }
];

const MenuItems = () => {
  return(
    <>
      <div className="pt-20 pb-10 px-4 sm:px-32 font-poppins">
        <h1 className="text-center text-4xl font-bold text-slate-700 mb-8">Menu Duriat Food</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((menu) => (
            <div key={menu.id} className="bg-white shadow-lg rounded-lg p-4 tr hover-card">
              <img 
                src={`./img/${menu.image}.jpg`} 
                alt={menu.name} 
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold text-gray-800 mt-4">{menu.name}</h2>
              <p className="text-gray-600 mt-2">{menu.description}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default MenuItems