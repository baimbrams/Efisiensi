import profile from "../image/efesiensi.png";

const Profile = () => {
  return (
    <section className=" bg-[#FFA812]">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={profile}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-5xl p-4 font-bold text-white">
            Bus Efisiensi
          </h1>
          <p className="mb-8 leading-relaxed p-4 pr-12 text-white ">
            Sugeng Rawuh di Web PT Efisiesnsi Putra Utama, Disini anda dapat
            temukan segala informasi tentang layanan jasa transportasi Bus PT
            Efisiensi Putra Utama. Dapatkan Informasi Daftar Pool atau Agen
            Tiket Bus Efisensi, Bus Business Class, Bus Gold Class, dan Bus Bus
            Pariwisata.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
