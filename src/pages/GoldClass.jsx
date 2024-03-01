import bantal from "../image/Gold Class/Bantal_Selimut.png";
import seatgold from "../image/Gold Class/Seat_Gold_Class.png";
import toilet from "../image/Gold Class/Toilet.png";
import usbcharger from "../image/Gold Class/USB_Charger.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Bus from "../components/Bus";

const Photo = [
  {
    id: 1,
    title: "Seat Gold Class",
    deskripsi: "Area Kebumen",
    img: seatgold,
  },
  {
    id: 1,
    title: "Bantal & Selimut",
    deskripsi: "Area Kebumen",
    img: bantal,
  },
  {
    id: 1,
    title: "Toilet",
    deskripsi: "Area Kebumen",
    img: toilet,
  },
  {
    id: 1,
    title: "USB Charger",
    deskripsi: "Area Kebumen",
    img: usbcharger,
  },
];

const GoldClass = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <h1 className="text-3xl font-bold text-center my-8">
        Fasilitas Bus Gold Class
      </h1>
      <div className="grid-cols-1 sm:grid md:grid-cols-2">
        {Photo.map((item) => (
          <div
            key={item.id}
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0"
          >
            <img src={item.img} alt={item.title} className="rounded-t-lg" />
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {item.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-bold text-center my-8">Bus Lainnya</h1>
      <Bus />
      <Footer />
    </>
  );
};

export default GoldClass;
