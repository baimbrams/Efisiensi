import logo from "../image/Logo.png";
import hotline from "../image/Hotline.png";
import youtube from "../image/youtube-white.svg";
import tiktok from "../image/tiktok-white.svg";

const Footer = () => {
  return (
    <>
      <footer className="flex mt-10 flex-col items-center bg-neutral-100 text-center bg-[#FFA812] lg:text-left">
        <div className="container text-neutral-800 dark:text-neutral-200">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="m-6 md:mb-0 text-left">
              <div className="flex w-full justify-center lg:justify-start mb-4">
                <img src={logo} alt="" className="w-[132px] h-[52px]" />
              </div>
              <h5 className="mb-2 uppercase font-bold text-white">
                PT Efisisensi Putra Utama
              </h5>
              <p>
                Alamat ꞉ Jalan Raya Wonosari Km. 6 Jatisalam, Jatisari,
                Kebumen,Jawa Tengah
              </p>
              <p className="mb-4 text-white">Jatisari, Kebumen, Jawa Tengah</p>
              <p className="text-white">Telepon ꞉ 0287 384444</p>
              <p className="text-white">Email ꞉ info@busefisiensi.co</p>
            </div>

            <div className="mb-2 md:mb-0 py-4">
              <div className="w-full grid place-content-center">
                <img src={hotline} alt="" className="w-[132px] h-[132px] " />
                <p className="mt-1 inline-flex">
                  <svg
                    fill="#ffffff"
                    className="mx-auto h-full w-4"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    // eslint-disable-next-line react/no-unknown-property
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 308 308"
                    xmlSpace="preserve"
                  >
                    <g id="XMLID_468_">
                      <path
                        id="XMLID_469_"
                        d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"
                      />
                      <path
                        id="XMLID_470_"
                        d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"
                      />
                    </g>
                  </svg>
                  <span className="ml-2 text-white text-lg">
                    0878-3900-0400
                  </span>
                </p>
              </div>
              <div className="mt-4 flex place-content-center">
                <span className="inline-flex w-full justfy-center items-center">
                  <a
                    href="#!"
                    type="button"
                    className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-full w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <p className="text-sm text-white">@busefisiensi</p>
                </span>

                <span className="inline-flex w-full justfy-center items-center">
                  <a
                    href="#!"
                    type="button"
                    className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img src={tiktok} alt="" className="mx-auto h-full w-4" />
                  </a>
                  <p className="text-sm text-white">@busefisiensi</p>
                </span>

                <span className="inline-flex w-full justfy-center items-center">
                  <a
                    href="#!"
                    type="button"
                    className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img src={youtube} alt="" className="mx-auto h-full w-4" />
                  </a>
                  <p className="text-xs text-white">Bus Efisiensi Official</p>
                </span>

                <span className="inline-flex w-full justfy-center items-center">
                  <a
                    href="#!"
                    type="button"
                    className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-full w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <p className="text-sm text-white">Bus Efisiensi</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-[#FFA812] dark:text-neutral-200">
          © 2024 Copyright:
          <a
            className="text-neutral-800 dark:text-white ml-1"
            href="https://tw-elements.com/"
          >
            PT Efisisensi Putra Utama
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
