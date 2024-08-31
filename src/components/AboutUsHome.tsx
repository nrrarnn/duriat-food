const AboutUsHome = () => {
  return(
    <>
      <div className="wrapping pt-[50px] font-poppins padding">
        <div className="w-full sm:w-1/2">
          <div className="flex justify-center items-center">
            <div className="absolute p-[180px] sm:p-[190px] rounded-full bg-orange-400 -z-30"></div>
            <img src="./img/about1.png" alt="About" />
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col justify-start gap-3 pt-24 sm:pt-2">
          <p className="text-orange-400 font-semibold text-xl">Tentang Kami</p>
          <p className="font-bold text-slate-800 text-3xl">Cita Rasa Autentik untuk Setiap Momen Spesial</p>
          <p className="text-slate-700">Duriat Food adalah usaha catering yang menyediakan berbagai pilihan hidangan berkualitas untuk berbagai acara. Kami mengkhususkan diri dalam menyajikan tumpeng nasi kuning, nasi box, nasi liwet dan beragam menu lainnya yang dibuat dengan bahan-bahan segar dan penuh cita rasa. </p>
          <button className="button w-[200px] border border-orange-400 text-orange-400">Lihat Selengkapnya</button>
        </div>
      </div>
    </>
  )
} 

export default AboutUsHome