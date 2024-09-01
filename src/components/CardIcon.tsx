import { FaUtensils, FaTruck, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import 'aos/dist/aos.css';

type CardIconType = {
  text: string;
  description: string;
  icon: JSX.Element;
}

const cardIcon: CardIconType[] = [
  { icon: <FaUtensils />, text: 'Pilihan Menu Beragam', description:"Nikmati berbagai pilihan menu yang lezat dan menggugah selera." },
  { icon: <FaTruck />, text: 'Layanan Cepat & Aman', description:"Pengiriman tepat waktu dengan jaminan keamanan " },
  { icon: <FaCheckCircle />, text: 'Kualitas Terjamin', description:"Hanya menggunakan bahan berkualitas untuk hasil yang terbaik." },
  { icon: <FaPhoneAlt />, text: 'Pesan Mudah & Cepat', description:"Proses pemesanan yang cepat dan mudah." },
] 

const CardIcon = () => {
  return(
    <>
      <div className="grid grid-cols-2 mt-32 sm:grid-cols-4 px-10 sm:px-32 font-montserrat py-10 gap-7">
        {cardIcon.map((el, i) => (
          <div 
            key={i}
            data-aos="fade-up" 
            data-aos-duration="1500"
            data-aos-delay={i * 100} 
          >
            <div className='w-[50px] h-[50px] rounded-full text-orange-400 shadow-lg flex justify-center items-center'>
              {el.icon}
            </div>
            <div className='pt-4'>
              <p className='font-semibold text-slate-700'>{el.text}</p>
              <p className='text-sm text-slate-700'>
                {el.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CardIcon;
