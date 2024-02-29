import BusPariwisata from "./pages/BusPariwisata";
import BusinessClass from "./pages/BusinessClass";
import GoldClass from "./pages/GoldClass";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/BusPariwisata",
    element: <BusPariwisata />,
  },
  {
    path: "/BusinessClass",
    element: <BusinessClass />,
  },
  {
    path: "/GoldClass",
    element: <GoldClass />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
