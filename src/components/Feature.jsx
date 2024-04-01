import RedBus from "../image/Redbus Ticket.png";
import Modal from "./Modal";
import Traveloka from "../image/Traveloka Ticket.png";
import Tiket from "../image/Efisiensi Ticket.png";

import Bus from "./Bus";

const Feature = () => {
  return (
    <section>
      <div className="container px-5 pt-8 mx-auto">
        <div className="text-center mb-8">
          <h1 className="sm:text-3xl text-3xl font-bold title-font text-gray-900 mb-4">
            BELI TIKET DI SINI
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#FFA812] inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-8 -mt-4 md:space-y-0 space-y-6">
          <div className="p-8 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-40 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img className="w-full h-full" src={RedBus} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                RedBus
              </h2>
              <p className="leading-relaxed text-base">
                Kamu bisa membeli tiket bus efisiensi melalui halaman resmi
                Redbus, dan dapatkan diskon menarik
              </p>
              {/* <Modal /> */}
              <a
                href="https://redbus.id/"
                target="_blank"
                className="flex mx-auto mt-16 text-white bg-[#FFA812] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg w-52 text-center justify-center"
                rel="noreferrer"
              >
                Beli Sekarang
              </a>
            </div>
          </div>

          <div className="p-8 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-40 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src={Tiket} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Tiket
              </h2>
              <p className="leading-relaxed text-base">
                Kamu bisa membeli tiket bus efisiensi melalui halaman resmi
                efisiensi, dan dapatkan diskon menarik
              </p>
              <a
                href="https://efisiensi.id/tickets"
                target="_blank"
                className="flex mx-auto mt-16 text-white bg-[#FFA812] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg w-52 text-center justify-center"
                rel="noreferrer"
              >
                Beli Sekarang
              </a>
            </div>
          </div>

          <div className="p-8 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-40 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src={Traveloka} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Traveloka
              </h2>
              <p className="leading-relaxed text-base">
                Kamu bisa membeli tiket bus efisiensi melalui halaman platform
                Traveloka, dan dapatkan diskon menarik
              </p>
              <Modal />
              {/* <a
                href="https://efisiensi.id/tickets"
                target="_blank"
                className="flex mx-auto mt-16 text-white bg-[#FFA812] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg w-52 text-center justify-center"
                rel="noreferrer"
              >
                Beli Sekarang
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center my-8">Pilihan Bus</h1>
      <Bus />
    </section>
  );
};

export default Feature;
