import Footer from "../components/Footer";
import Header from "../components/Header";
import cabin from "../image/Business Class/Cabin_Bagasi.png";
import entertainment from "../image/Business Class/Entertainment.png";
import seat from "../image/Business Class/Seat_Business_Class.png";
import usbcas from "../image/Business Class/USB_Charger.png";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

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

export default BusinessClass;
