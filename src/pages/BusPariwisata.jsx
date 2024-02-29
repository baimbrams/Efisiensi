import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import dispenser from "../image/Pariwisata/Dispenser.png";
import seatfull from "../image/Pariwisata/Seat_Pariwisata_Full.png";
import seatpariwisata from "../image/Pariwisata/Seat_Pariwisata.png";
import toilet from "../image/Pariwisata/Toilet.png";
import usb from "../image/Pariwisata/USB_Charger.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Jadwal = [
  {
    id: 1,
    kota: "Area Kebumen",
    alamat:
      "Rest Area Efisiensi Kebumen Jl. Raya Wonosari Km. 6 Jatisari, Kebumen, Jawa Tengah",
    no_tlp: "0813-9218-3469 Aji",
    no_tlp2: "0812-2999-412 Bekti",
  },
  {
    id: 1,
    kota: "Area Yogyakarta",
    alamat:
      "Pool Efisiensi Ambarketawang, Jl Wates Km.5 Ambarketawang,Sleman, DIY",
    no_tlp: "0812-3963-6071 Angga",
  },
  {
    id: 1,
    kota: "Area Cilacap",
    alamat:
      "Pool Efisiensi Cilacap, Jl. Perintis Kemerdekaan No. 52 Rajanegara, Gumilir, Kec. Cilacap Utara, Cilacap, Jawa Tengah",
    no_tlp: "0878-3763-8859 Heru",
  },
  {
    id: 1,
    kota: "Area Purwokerto",
    alamat:
      "Garasi Efisiensi Purwokerto, Jl. Suparjo rustam No. 7, Pesuruhan,Berkoh,Kec. Purwokerto, Kabupaten Banyumas, Jawa Tengah",
    no_tlp: "0822-2548-2929 Kristiono",
  },
];

const Photo = [
  {
    id: 1,
    title: "Dispenser",
    deskripsi: "Area Kebumen",
    img: dispenser,
  },
  {
    id: 1,
    title: "Seatfull",
    deskripsi: "Area Kebumen",
    img: seatfull,
  },
  {
    id: 1,
    title: "Seatpariwisata",
    deskripsi: "Area Kebumen",
    img: seatpariwisata,
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
    img: usb,
  },
];

const BusPariwisata = () => {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold text-center my-8">
        Informasi Bus Wisata
      </h1>
      <div className="grid lg:grid-cols-4 gap-4">
        {Jadwal.map((item) => (
          <Card className="mt-6 w-full" key={item.id}>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {item.kota}
              </Typography>
              <Typography>{item.alamat}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Typography>{item.no_tlp}</Typography>
              <Typography>{item.no_tlp2 ?? null}</Typography>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h1 className="text-3xl font-bold text-center my-8">Fasilitas Bus</h1>
      <div className="grid lg:grid-cols-3 gap-4 my-10">
        {Photo.map((item) => (
          <Card key={item.id} className="w-96">
            <CardHeader floated={false} className="h-80 shadow-sm">
              <img src={item.img} alt={item.title} />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {item.title}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default BusPariwisata;
