import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import 'aos/dist/aos.css'; 

const AboutUsHome = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(imgRef.current, {
            scale: 1.1,
            duration: 1.5,
            ease: "power1.inOut",
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="wrapping pt-[50px] font-poppins padding">
        <div className="w-full sm:w-1/2">
          <div className="flex justify-center items-center">
            <div className="absolute p-[148px] sm:p-[190px] rounded-full bg-orange-400 -z-30"></div>
            <img src="./img/about1.png" alt="About" ref={imgRef} />
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col justify-start gap-3 pt-24 sm:pt-2"    data-aos="fade-up" 
        data-aos-duration="1500" >
          <p className="text-orange-400 font-semibold text-xl">
            Tentang Kami
          </p>
          <p className="font-bold text-slate-800 text-3xl">
            Cita Rasa Autentik untuk Setiap Momen Spesial
          </p>
          <p className="text-slate-700">
            Duriat Food adalah usaha catering yang menyediakan berbagai pilihan hidangan berkualitas untuk berbagai acara. Kami mengkhususkan diri dalam menyajikan tumpeng nasi kuning, nasi box, nasi liwet dan beragam menu lainnya yang dibuat dengan bahan-bahan segar dan penuh cita rasa.
          </p>
          <button className="button w-[200px] border border-orange-400 text-orange-400 tr hover:bg-orange-400 hover:text-white hover:shadow-md">
            <Link to={'/about'}>Lihat Selengkapnya</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutUsHome;
