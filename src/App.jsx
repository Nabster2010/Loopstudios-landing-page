import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ImageCard from "./components/ImageCard";
import { useTranslation } from "react-i18next";
const images = [
  {
    src: "image-deep-earth.jpg",
    title: "Deep earth",
  },
  {
    src: "image-night-arcade.jpg",
    title: "Night arcade",
  },
  {
    src: "image-soccer-team.jpg",
    title: "Soccer team VR",
  },
  {
    src: "image-grid.jpg",
    title: "The grid",
  },
  {
    src: "image-from-above.jpg",
    title: "From up above VR",
  },
  {
    src: "image-pocket-borealis.jpg",
    title: "Pocket borealis",
  },
  {
    src: "image-curiosity.jpg",
    title: "The curiosity",
  },
  {
    src: "image-fisheye.jpg",
    title: "Make it fisheye",
  },
];

function App() {
  const [mobileOpen, setmobileOpen] = useState(false);
  const { t } = useTranslation();
  const toggleMobile = () => {
    setmobileOpen(!mobileOpen);
  };

  return (
    <div className="min-h-screen rtl:font-Cairo text-black bg-white dark:bg-gray-600 dark:text-white  ">
      <header className="relative lg:px-24  md:px-16 px-4 py-8 md:py-16  h-screen bg-cover bg-no-repeat  bg-[url('/images/mobile/image-hero.jpg')] md:bg-[url('/images/desktop/image-hero.jpg')]">
        <NavBar toggleMobile={toggleMobile} mobileOpen={mobileOpen} />
        <div className="border-2 flex-wrap max-w-[600px]  md:p-8 p-6 mt-24  border-white">
          <h1 className="text-white uppercase text-5xl rtl:font-Cairo md:text-6xl font-Josefin">
            {t("heroText")}
          </h1>
        </div>
      </header>
      <main className="mt-24  lg:px-24 md:px-16 px-4 justify-center items-center ">
        <section className="flex flex-col lg:flex-row  ">
          <div className="">
            <picture>
              <source
                media="(min-width:768px)"
                srcSet="/images/desktop/image-interactive.jpg"
              />
              <img
                src="/images/mobile/image-interactive.jpg"
                className="max-w-full object-contain"
                alt=""
              />
            </picture>
          </div>
          <div className="p-16 ltr:md:pr-0 md:text-start   flex-1 ltr:md:-ml-[15%]  rtl:md:-mr-[15%] bg-white dark:bg-[#4B5563] mt-6 text-center md:mt-[20%]">
            <h1 className="text-4xl rtl:font-Cairo font-Josefin dark:text-white  text-black">
              {t("section.header")}
            </h1>
            <p className="font-Alata rtl:font-Cairo mt-10 text-sm text-DarkGray dark:text-White leading-6">
              {t("section.text")}
            </p>
          </div>
        </section>
        <section className="md:mt-24 ">
          <div className="flex justify-between items-center">
            <h1 className="md:text-4xl text-2xl whitespace-nowrap rtl:font-Cairo font-Josefin uppercase">
              Our creations
            </h1>
            <button className="border whitespace-nowrap border-black dark:border-white dark:text-White text-sm uppercase px-8 tracking-widest rtl:font-Cairo font-Josefin py-2 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-White  transition">
              see All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4 mt-20">
            {images.map((img) => (
              <ImageCard key={img.src} img={img} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
