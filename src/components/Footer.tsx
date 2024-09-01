const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10">
        <div className="padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Tentang Duriat Food</h3>
              <p className="text-gray-400">
                Duriat Food adalah penyedia layanan catering dengan berbagai pilihan menu khas Nusantara yang siap membuat acara Anda menjadi lebih istimewa.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Menu</h3>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#tumpeng">Tumpeng Nasi Kuning</a></li>
                <li className="mb-2"><a href="#liwet">Nasi Liwet Komplit</a></li>
                <li className="mb-2"><a href="#nasi-box">Nasi Box</a></li>
                <li className="mb-2"><a href="#sale-pisang">Sale Pisang</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
              <p className="text-gray-400">Alamat:</p>
              <p className="text-gray-400 mb-4">Jl. Salamanjah RT 02 RW 06 DS. Cipaku Kec. Paseh Kab. Bandung</p>
              <p className="text-gray-400">Telepon: +62895380084949</p>
              <p className="text-gray-400">Email: info@duriatfood.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
              <p className="text-gray-400 mb-4">Terhubung dengan kami di media sosial untuk mendapatkan update terbaru:</p>
              <ul className="flex gap-4">
                <li>
                  <a href="https://www.instagram.com/duriatfoodmajalaya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center text-gray-500">
            <p>&copy; 2024 Duriat Food. All Rights Reserved.</p>
            <p>Made by <a href="https://www.linkedin.com/in/nur-arini" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Ryn</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
