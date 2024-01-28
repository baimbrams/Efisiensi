import profile from "../image/efesiensi.png";

const Profile = () => {
  return (
    <section className="">
      <div className="grid lg:grid-cols-2">
        <div className="mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={profile}
          />
        </div>
        <div className="bg-[#FFA812] flex w-full justify-center items-center flex-col">
          <h1 className="title-font sm:text-4xl text-5xl p-4 mt-10 font-bold text-white">
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
