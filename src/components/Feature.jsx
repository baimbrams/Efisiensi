import RedBus from "../image/Redbus Ticket.png";
import green from "../image/Green Bus.png";
import orange from "../image/Orange Bus.png";
import yellow from "../image/Yellow Bus.png";
const Feature = () => {
  return (
    <section>
      <div className="container px-5 pt-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            BELI TIKET DI SINI
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#FFA812] inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-8 -mt-4 md:space-y-0 space-y-6">
          <div className="p-8 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src={RedBus} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                RedBus
              </h2>
              <p className="leading-relaxed text-base">
                Kamu bisa membeli tiket bus efisiensi melalui halaman resmi
                Redbus, dan dapatkan diskon menarik
              </p>
              <button className="flex mx-auto mt-16 text-white bg-[#FFA812] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Selengkapnya
              </button>
            </div>
          </div>

          <div className="p-8 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src={RedBus} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Tiket
              </h2>
              <p className="leading-relaxed text-base">
                Kamu bisa membeli tiket bus efisiensi melalui halaman resmi
                efisiensi, dan dapatkan diskon menarik
              </p>
              <button className="flex mx-auto mt-16 text-white bg-[#FFA812] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Selengkapnya
              </button>
            </div>
          </div>

          <div className="p-8 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src={RedBus} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Traveloka
              </h2>
              <p className="leading-relaxed text-base">
                Kamu bisa membeli tiket bus efisiensi melalui halaman platform
                Traveloka, dan dapatkan diskon menarik
              </p>
              <button className="flex mx-auto mt-16 text-white bg-[#FFA812] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 pt-6  mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={green} alt="" />
              <h1 className="title-font sm:text-2xl text-xl font-medium pt-12 text-gray-900 mb-3">
                Bus Pariwisata
              </h1>
              <button className="flex mx-auto mt-16 text-white bg-[#FFA812] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Selengkapnya
              </button>
            </div>
          </div>

          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={orange} alt="" />
              <h1 className="title-font sm:text-2xl text-xl font-medium pt-12 text-gray-900 mb-3">
                Bus Cilacap
              </h1>
              <button className="flex mx-auto mt-16 text-white bg-[#FFA812] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Selengkapnya
              </button>
            </div>
          </div>

          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={yellow} alt="" />
              <h1 className="title-font sm:text-2xl text-xl font-medium pt-12 text-gray-900 mb-3">
                Bus Yogyakarta
              </h1>
              <button className="flex mx-auto mt-16 text-white bg-[#FFA812] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;