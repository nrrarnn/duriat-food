
const ImageGallery = () => {

  return (
    <div className='padding wrapping gap-5 justify-between'>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:gap-8 w-full h-[500px] p-5">
        <div className="relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2">
          <img
            src="./img/proses1.jpg"
            loading="lazy"
            alt="proses 1"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          <span className="relative ml-4 mb-3 inline-block text-sm text-white">{""}</span>
        </div>

        <div className="relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="./img/proses2.jpg"
            loading="lazy"
            alt={""}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          <span className="relative ml-4 mb-3 inline-block text-sm text-white">{""}</span>
        </div>

        <div className="relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="./img/nasi-liwet-box.jpg"
            loading="lazy"
            alt={''}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 "></div>
          <span className="relative ml-4 mb-3 inline-block text-sm text-white">{""}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
