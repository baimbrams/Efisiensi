import Bus from "../components/Bus";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import cabin from "../image/Business Class/Cabin_Bagasi.png";
import entertainment from "../image/Business Class/Entertainment.png";
import seat from "../image/Business Class/Seat_Business_Class.png";
import usbcas from "../image/Business Class/USB_Charger.png";

const Photo = [
  {
    id: 1,
    title: "Seat Business Class",
    deskripsi: "Area Kebumen",
    img: seat,
  },
  {
    id: 1,
    title: "Entertainment",
    deskripsi: "Area Kebumen",
    img: entertainment,
  },
  {
    id: 1,
    title: "Cabin Bagasi",
    deskripsi: "Area Kebumen",
    img: cabin,
  },
  {
    id: 1,
    title: "USB Charger",
    deskripsi: "Area Kebumen",
    img: usbcas,
  },
];

const BusinessClass = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <h1 className="text-3xl font-bold text-center my-8">
        Fasilitas Bus Business Class
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

export default BusinessClass;
