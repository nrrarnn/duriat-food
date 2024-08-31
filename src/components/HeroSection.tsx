const HeroSection = () => {
  return(
    <>
      <div className="wrapping padding font-montserrat items-center pt-40 sm:pt-20 h-full">
        <div className="w-full sm:w-1/2 lg:pt-20">
          <h1 className=" font-extrabold text-5xl">Selamat Datang di <span className="text-orange-400">Duriat Food</span></h1>
          <p className="text-slate-700">Duriat Food menghadirkan pilihan catering terbaik, mulai dari Tumpeng Nasi Kuning hingga Nasi Box. Sajikan kelezatan pada setiap momen penting Anda.</p>
          <button className="button bg-orange-400">Jelajahi Menu</button>
        </div>
        <div className="w-full sm:w-1/2 mt-10 sm:mt-4">
            <div className="absolute right-[105px] sm:right-[230px]  p-36 sm:px-[160px] sm:py-[180px] bg-orange-400 -z-30 rounded-tl-[40px] rounded-br-[40px]"></div>
            <img src="./img/img.png" alt="Nasi Tumpeng" />
        </div>
      </div>
    </>
  )
}

export default HeroSection