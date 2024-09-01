import { FaEye, FaLightbulb } from 'react-icons/fa';
import 'aos/dist/aos.css'; 


const AboutPage = () => {
  return(
    <>
    <div className="padding py-20 font-poppins" >
      <h1 className="text-xl font-bold text-slate-800 mb-6">Tentang Kami</h1>
      
      <section className="mb-12" data-aos="fade-up" 
        data-aos-duration="1500">
        <p className="text-gray-600">
          Duriat Food adalah usaha catering yang menyediakan berbagai pilihan hidangan berkualitas untuk berbagai acara. Kami mengkhususkan diri dalam menyajikan tumpeng nasi kuning, nasi box, nasi liwet, dan beragam menu lainnya yang dibuat dengan bahan-bahan segar dan penuh cita rasa.
        </p>
        <p className="text-gray-600 mt-4">
          Setiap hidangan yang kami sajikan tidak hanya menggugah selera, tetapi juga dibuat dengan penuh cinta dan perhatian terhadap detail, memastikan setiap momen perayaan Anda menjadi istimewa. Kami percaya bahwa makanan adalah bagian penting dari setiap acara, dan itulah mengapa kami selalu berkomitmen untuk memberikan pelayanan terbaik dengan kualitas yang tidak pernah kami kompromikan. Dari acara keluarga hingga perayaan besar, Duriat Food siap membantu menjadikan setiap kesempatan Anda lebih berkesan dengan hidangan yang lezat dan memuaskan.
        </p>
      </section>
      
      <section className="mb-12 pt-10" >
        
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex flex-col items-center" data-aos="fade-up" 
        data-aos-duration="1500">
              <div className="bg-orange-400 p-5 rounded-full">
                <FaEye className="text-white text-6xl" />
              </div>
              <h3 className="text-xl font-bold mt-4 text-slate-700">Visi Kami</h3>
              <p className="text-center mt-2 text-slate-600">Menjadi penyedia katering terbaik yang selalu mengutamakan kualitas dan kepuasan pelanggan.</p>
            </div>

            <div className="flex flex-col items-center" data-aos="fade-up" 
        data-aos-duration="1500">
              <div className="bg-green-400 p-5 rounded-full">
                <FaLightbulb className="text-white text-6xl" />
              </div>
              <h3 className="text-xl font-bold mt-4 text-slate-700">Misi Kami</h3>
              <p className="text-center mt-2 text-slate-600">Menyajikan hidangan dengan bahan segar, layanan profesional, dan memberikan nilai terbaik kepada setiap pelanggan.</p>
            </div>
         </div>
      </section>

      <section className="mb-12 pt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center pt-6">Dibalik Duriat Food</h2>
        <div className='wrapping justify-center items-center gap-10 text-center'>
          <div className='flex flex-col w-[300px] gap-2' data-aos="zoom-in" 
        data-aos-duration="1500">
            <img src="./img/mamah-feb.jpg" alt="Mamah feb" className='rounded-full w-[300px]'/>
            <p className='font-bold '>Ibu Lina Erlina Wati</p>
            <p className='text-sm '>Pendiri dan Juru Masak Utama Duriat Food. Dengan pengalaman puluhan tahun di dunia kuliner, beliau selalu memastikan setiap hidangan dibuat dengan penuh cinta dan bahan-bahan terbaik.</p>
          </div>
          <div className='flex flex-col w-[300px] gap-2' data-aos="zoom-in" 
        data-aos-duration="1500">
            <img src="./img/febri.jpg" alt="Mamah feb" className='rounded-full w-[300px]'/>
            <p className='font-bold'>Febriani Nur Annisa</p>
            <p className='text-sm'> mengelola dan mengembangkan Duriat Food. Berperan dalam pemasaran dan inovasi menu, mereka membawa sentuhan modern ke dalam setiap hidangan tradisional yang kami sajikan.</p>
          </div>
        </div>
      </section>

      <section className="mb-12" data-aos="fade-up" 
        data-aos-duration="1500">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Proses dan Kualitas</h2>
        <p className="text-gray-600">
          Kami menggunakan bahan berkualitas dan mengikuti prosedur kebersihan yang ketat untuk memastikan setiap hidangan tidak hanya enak tetapi juga aman dikonsumsi. Proses persiapan dan pengolahan yang teliti memastikan bahwa setiap hidangan disajikan dalam kondisi terbaiknya.
        </p>
      </section>
    </div>
    </>
  )
}

export default AboutPage;