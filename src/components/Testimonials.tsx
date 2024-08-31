type TypeTesti = {
  name: string;
  text: string;
  img: string;
}

const Testimonials = () => {
  return(
    <>
      <div className="padding w-full font-poppins py-20">
        <h1 className="text-center font-bold text-2xl text-slate-800">Apa Kata Pelanggan Kami</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 pt-10">
          {
            testiCustomers.map((testimonial, i) => (
               <div key={i} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                </div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500 mt-2 italic">{testimonial.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

const testiCustomers: TypeTesti[] = [
  {
    name: "arin",
    text: "enak bgt",
    img: "https://i.pravatar.cc/150?u=a04258114e29026702d"
  },
  {
    name: "arin",
    text: "enak bgt",
    img: "https://i.pravatar.cc/150?u=a04258114e29026702d"
  },
  {
    name: "arin",
    text: "enak bgt",
    img: "https://i.pravatar.cc/150?u=a04258114e29026702d"
  },
  {
    name: "arin",
    text: "enak bgt",
    img: "https://i.pravatar.cc/150?u=a04258114e29026702d"
  },
] 

export default Testimonials;