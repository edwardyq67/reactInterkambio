import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../App.css";

import { motion } from "framer-motion";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Lottie from "react-lottie";
import nosotros1 from "../lib/lotties/Animation - 1731904856486.json";
import nosotros2 from "../lib/lotties/Animation - 1731905097902.json";
import InicioSeccion1 from "../lib/imagenes/InicioSeccion1.webp";
import InicioSeccion2 from "../lib/imagenes/InicioSeccion2.webp";
import InicioSeccion3 from "../lib/imagenes/InicioSeccion3.webp";
import Example from "./Example";

const LottieAnimations = () => {
  // Configuración de opciones de la primera animación
  const options1 = {
    loop: true,
    autoplay: true,
    animationData: nosotros1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Configuración de opciones de la segunda animación
  const options2 = {
    loop: true,
    autoplay: true,
    animationData: nosotros2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-col py-20 container mx-auto">
      <div className="flex items-center justify-center">
            
      <Lottie options={options1} height={400} width={800} />
      <div className="w-full md:w-[40vw]">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fe7411]">Mision</h3>
        <p className="text-base text-white">Nuestra misión como empresa es brindar soluciones de manera sencilla a todas las necesidades de cada cliente con respecto a los problemas que le puedan surgir en el sector informático.</p>
      </div>
      </div>
 
<div className="flex items-center justify-center">
   <div className="w-full md:w-[40vw]">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fe7411]">Vision</h3>
    <p className="text-base text-white">Nuestra visión es posicionar la marca en el mercado nacional, como una empresa destacada en brindar soporte técnico a todas las empresas peruanas.</p>
   </div>
      <Lottie options={options2} height={400} width={800} />
</div>
     
    </div>
  );
};

function Interkambio() {
  const [slideIndex, setSlideIndex] = useState(0);

  const seccion1 = [
    {
      id: 1,
      img: InicioSeccion1,
      title1: "OPTIMIZA EL RENDIMIENTO DE TU EMPRESA CON",
      principal: "SOPORTE TÉCNICO ESPECIALIZADO",
      title2: ", LA SOLUCIÓN IDEAL PARA TU NEGOCIO",
    },
    {
      id: 2,
      img: InicioSeccion2,
      title1: "FORTALECE TU ",
      principal: " SEGURIDAD DE TU REDES INFORMÁTICAS",
      title2: " CON SOLUCIONES DE CIBERSEGURIDAD DE VANGUARDIA",
    },
    {
      id: 3,
      img: InicioSeccion3,
      title1: "IMPULSA TU PRESENCIA ONLINE CON NUESTRO ",
      principal: "SERVICIO DE HOSTING WEB",
      title2: " Y REGISTRO DE DOMINIOS SEGUROS",
    },
  ];

  return (
    <main className="font-poppins">
      <section className="relative overflow-x-hidden max-w-[100vw] ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          effect="fade"
          modules={[Autoplay, Pagination, EffectFade]}
          className="mySwiper"
          style={{ width: "100vw", height: "100vh" }}
          onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)} // Actualiza el slideIndex
        >
          {seccion1.map((seccion1Componets) => (
            <SwiperSlide className="relative" key={seccion1Componets.id}>
              {/* Imagen */}
              <motion.img
                src={seccion1Componets.img}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{
                  opacity: slideIndex === seccion1Componets.id - 1 ? 1 : 0,
                  scale: slideIndex === seccion1Componets.id - 1 ? 1.1 : 1,
                }}
                transition={{ duration: 1 }}
              />
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto text-white text-2xl sm:text-3xl md:text-6xl font-bold w-full px-4 flex flex-col gap-5 leading-tight">
                  <h2 className="w-full md:w-[70vw] ">
                    {seccion1Componets.title1}{" "}
                    <span className="text-[#ff730d]">
                      {seccion1Componets.principal}
                    </span>
                    {seccion1Componets.title2}{" "}
                  </h2>
                  <button className="btn-primary">
                    Ver servicios <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute z-[900] custom-shape-divider-bottom-1731866381">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section>
        <Example />
      </section>
      <section className="relative">
        <div className="custom-shape-divider-top-1731904564">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="w-full  bg-[#006999]">
            <LottieAnimations />
          <div></div>
        </div>
        <div className="custom-shape-divider-bottom-1731904399">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="h-[100vh]"></section>
    </main>
  );
}

export default Interkambio;
