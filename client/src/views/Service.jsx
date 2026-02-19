import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Servicecard from "../component/Servicecard";

function Service() {
  return (
    <div>
      <Navbar />
      <div className="my-25 mx-5 flex flex-col items-center justify-center flex-wrap">
        <p className="text-5xl text-center md:text-7xl font-bold text-[#2b92f3] mt-1">
          Browse Services
        </p>
        <p className="text-lg text-center md:text-xl text-[#554d47] mt-3">
          Find and book the right professional for your needs
        </p>
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap mb-20">
        <Servicecard
          img="../src/assets/home_bg.jpg"
          name={"Atharv Bolke"}
          profession={"Developer"}
          location={"Mumbai"}
          experience={5}
          price={500}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Service;
