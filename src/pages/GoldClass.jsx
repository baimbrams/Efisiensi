import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import bantal from "../image/Gold Class/Bantal_Selimut.png";
import seatgold from "../image/Gold Class/Seat_Gold_Class.png";
import toilet from "../image/Gold Class/Toilet.png";
import usbcharger from "../image/Gold Class/USB_Charger.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <Header />
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

export default GoldClass;
