const HeroSection = () => {
  return(
    <>
      <div className="flex flex-col sm:flex-row px-10 sm:px-32 font-montserrat items-center pt-10">
        <div className="w-full sm:w-1/2">
          <h1 className=" font-extrabold text-5xl">Cita Rasa Autentik untuk Setiap Momen Spesial</h1>
          <p>Duriat Food menghadirkan pilihan catering terbaik, mulai dari Tumpeng Nasi Kuning hingga Nasi Box. Sajikan kelezatan pada setiap momen penting Anda.</p>
          <button className="px-4 py-3 rounded-lg bg-orange-400 mt-4 text-white font-semibold">Jelajahi Menu</button>
        </div>
        <div className="w-full sm:w-1/2 sm:mt-4">
            <div className="absolute right-[230px]  p-36 sm:px-[160px] sm:py-[180px] bg-orange-400 -z-30 rounded-tl-[40px] rounded-br-[40px]"></div>
            <img src="./img/img.png" alt="Nasi Tumpeng" />
        </div>
      </div>
    </>
  )
}

export default HeroSection