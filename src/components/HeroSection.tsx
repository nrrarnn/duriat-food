import { Link } from "react-router-dom"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);


  useEffect(() => {
    if (textRef.current && imgRef.current) {
    gsap.to(textRef.current, {
      duration: 2,
      text: {
        value: "Duriat Food",
        delimiter: ""
      }
    });

    gsap.to(imgRef.current, {
       scale: 1.1, 
        duration: 1.5,
        ease: "power1.inOut"
    });
  }
  }, []);
  return(
    <>
      <div className="wrapping padding font-montserrat items-center pt-40 sm:pt-20 h-full" ref={containerRef} >
        <div className="w-full sm:w-1/2 lg:pt-20">
          <h1 className=" font-extrabold text-5xl">Selamat Datang di <span className="text-orange-400" ref={textRef}></span></h1>
          <p className="text-slate-700">Duriat Food menghadirkan pilihan catering terbaik, mulai dari Tumpeng Nasi Kuning hingga Nasi Box. Sajikan kelezatan pada setiap momen penting Anda.</p>
          <button className="button bg-orange-400 tr hover:bg-orange-600"><Link to={'/menu'}>Jelajahi Menu</Link></button>
        </div>
        <div className="w-full sm:w-1/2 mt-10 sm:mt-4">
            <div className="absolute right-[90px] sm:right-[230px]  p-28 sm:px-[160px] sm:py-[180px] bg-orange-400 -z-30 rounded-tl-[40px] rounded-br-[40px]"></div>
            <img src="./img/img.png" alt="Nasi Tumpeng" ref={imgRef} />
        </div>
      </div>
    </>
  )
}

export default HeroSection