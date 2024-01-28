import { useState } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  //   DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Modal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex mx-auto mt-16 text-white bg-[#FFA812] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
      >
        Selengkapnya
      </button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Coming Soon.</DialogHeader>
        {/* <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody> */}
        <DialogFooter>
          {/* <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button> */}
          <Button variant="gradient" color="orange" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
export default Modal;
