import green from "../image/Business Class/Icon_Business_Class.png";
import orange from "../image/Pariwisata/Icon_Pariwisata.png";
import yellow from "../image/Gold Class/Icon_Gold_Class.png";
import { Link } from "react-router-dom";

const Bus = () => {
  return (
    <div className="container px-5 pt-6  mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/3">
          <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-8 rounded-lg overflow-hidden text-center relative">
            <img src={orange} alt="" />
            <h1 className="title-font sm:text-2xl text-xl font-medium pt-12 text-gray-900 mb-3">
              Bus Pariwisata
            </h1>
            <div className="flex justify-center  items-center">
              <Link
                to="/BusPariwisata"
                className=" flex w-full justify-center text-center  mt-16 text-white bg-[#FFA812] border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-lg"
              >
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4 lg:w-1/3">
          <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-8 rounded-lg overflow-hidden text-center relative">
            <img src={green} alt="" />
            <h1 className="title-font sm:text-2xl text-xl font-medium pt-12 text-gray-900 mb-3">
              Business Class
            </h1>
            <div className="flex justify-center  items-center">
              <Link
                to="/BusinessClass"
                className=" flex w-full justify-center text-center  mt-16 text-white bg-[#FFA812] border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-lg"
              >
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4 lg:w-1/3">
          <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-8 rounded-lg overflow-hidden text-center relative">
            <img src={yellow} alt="" />
            <h1 className="title-font sm:text-2xl text-xl font-medium pt-12 text-gray-900 mb-3">
              Gold Class
            </h1>
            <div className="flex justify-center  items-center">
              <Link
                to="/GoldClass"
                className=" flex w-full justify-center text-center  mt-16 text-white bg-[#FFA812] border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-lg"
              >
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bus;
