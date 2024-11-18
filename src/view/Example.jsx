import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import soporteTecnicoEmpresa from "../lib/imagenes/SoporteTecnicoEmpresa.webp";
import seguridadRedes from "../lib/imagenes/SeguridadRedes.webp";
import hostingWeb from "../lib/imagenes/HostingWeb.webp";
import diseñoyDesarrollo from "../lib/imagenes/DiseñoyDesarrolloWeb.webp";
import productvidad from "../lib/imagenes/Productividad-Software-para-Empresa.webp";
import telefonia from "../lib/imagenes/TelefoníaVoIPySusBeneficiosParaEmpresas.png";
import { IoIosArrowForward } from "react-icons/io";

const Example = () => {
  return (
    <div className=" pt-[100px]">
      <div className=" flex flex-col gap-5 w-full md:text-start text-center lg:w-[80vw] px-4 md:px-20">
        <h2 className="text-[#fe7411] text-2xl sm:text-3xl md:text-5xl font-bold">
          EXPERTOS EN BRINDAR SOLUCIONES TECNOLÓGICAS PARA TU EMPRESA
        </h2>
        <p className="sm:text-base text-base text-[#94A2B3]">
          Somos una empresa dedicada a brindar soluciones TI y servicios de
          consultoría SAP. Contamos con un Staff de profesionales
          multidisciplinarios altamente calificados y de amplia experiencia,
          siendo así tu partner estratégico en la transformación digital de tu
          empresa.
        </p>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Estado para el ancho de pantalla
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Puntos de referencia para los anchos máximos y desplazamientos
  const breakpoints = [
    { width: 810, xValue: -85 },
    { width: 1024, xValue: -75 },
    { width: 1280, xValue: -70 },
    { width: 1536, xValue: -65 },
    { width: 1728, xValue: -60 },
  ];

  // Función para interpolar el valor de x basado en el ancho de la pantalla
  const getXValue = (width) => {
    // Si el ancho es menor que el primer punto de referencia
    if (width <= breakpoints[0].width) {
      return breakpoints[0].xValue;
    }
    // Si el ancho es mayor que el último punto de referencia
    if (width >= breakpoints[breakpoints.length - 1].width) {
      return breakpoints[breakpoints.length - 1].xValue;
    }

    // Buscar los puntos de referencia más cercanos para la interpolación
    for (let i = 0; i < breakpoints.length - 1; i++) {
      const lower = breakpoints[i];
      const upper = breakpoints[i + 1];

      // Si el ancho está dentro del rango, calculamos la interpolación
      if (width >= lower.width && width <= upper.width) {
        const ratio = (width - lower.width) / (upper.width - lower.width);
        return lower.xValue + ratio * (upper.xValue - lower.xValue);
      }
    }
  };

  // Actualiza el ancho de la pantalla al cambiar el tamaño
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verifica el tamaño al cargar el componente

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcula el valor de 'x' basado en el ancho de la pantalla
  const x = useTransform(scrollYProgress, [0, 1], ["1%", `${getXValue(screenWidth)}%`]);

  return (
    <section ref={targetRef} className="relative h-[300vh] pt-10 md:py-0">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 lg:gap-30">
          {section2.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  // Lógica para determinar la clase justify-* en función del id
  const justifyClass =
    card.id % 2 === 0
      ? "justify-start"
      : card.id % 3 === 0
      ? "justify-end"
      : "justify-center";

  return (
    <motion.div
      className={`group relative h-[800px] w-[80vw] md:w-[600px] overflow-hidden flex flex-col items-center ${justifyClass} gap-10`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Imagen con opacidad que aparece después del texto */}
      <picture className="cursor-pointer drop-shadow-xl scale-100 hover:scale-105 transition-all duration-300 overflow-hidden w-[500px] flex justify-end rounded-md">
        <div className="relative">
          <motion.img
            className="rounded-md w-[400px] md:w-[600px]"
            src={card.img}
            alt={card.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }} // Se retrasa un poco después del texto
          />
          <div className="absolute inset-0 bg-[#ff9337] opacity-0 hover:opacity-10 transition-all duration-300 rounded-md"></div>
        </div>
      </picture>
      <motion.div
        className="flex flex-col gap-5 lg:text-start text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0 }} // Aparece primero
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold ">{card.title}</h3>
        <p className="text-base text-[#94A2B3]  line-clamp-3">{card.description}</p>
      </motion.div>
      <motion.div className="w-full flex md:justify-start mx-auto justify-center"
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 2, delay: 0.5 }} >
        <button className="btn-primary text-white">
          MÁS INFORMACION <IoIosArrowForward />
        </button>
      </motion.div>
    </motion.div>
  );
};
Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default Example;

const section2 = [
  {
    id: 1,
    img: soporteTecnicoEmpresa,
    title: "Soporte Técnico para Empresas",
    description:
      "Nuestro equipo de profesionales están capacitados para resolver cualquier problema relacionado con la tecnología y la seguridad de tu empresa. Contamos con una amplia experiencia en el campo del desarrollo de software y el mantenimiento de sistemas.",
  },
  {
    id: 2,
    img: seguridadRedes,
    title: "Seguridad de Redes Informáticas",
    description:
      "Protege los datos y la infraestructura de tu empresa con nuestras soluciones de seguridad de redes. Ofrecemos auditorías, monitoreo constante y herramientas avanzadas para prevenir ataques cibernéticos y garantizar la integridad de tus sistemas.",
  },
  {
    id: 3,
    img: hostingWeb,
    title: "Hosting Web y Dominios",
    description:
      "Ofrecemos servicios de hosting web confiables y seguros, junto con el registro de dominios para garantizar que tu negocio tenga una presencia en línea sólida y accesible las 24 horas, todos los días del año.",
  },
  {
    id: 4,
    img: diseñoyDesarrollo,
    title: "Diseño y Desarrollo Web",
    description:
      "Nuestro equipo de diseñadores y desarrolladores web crea sitios web personalizados y optimizados para garantizar una experiencia de usuario excepcional, aumentando la visibilidad y efectividad de tu empresa en línea.",
  },
  {
    id: 5,
    img: productvidad,
    title: "Productividad y Software para Empresas",
    description:
      "Impulsa la eficiencia de tu empresa con nuestras soluciones de software diseñadas para optimizar la gestión, comunicación y productividad, adaptadas a las necesidades específicas de tu negocio.",
  },
  {
    id: 6,
    img: telefonia,
    title: "Telefonía VoIP y Sus Beneficios para Empresas",
    description:
      "Mejora la comunicación de tu empresa con nuestros servicios de telefonía VoIP, que ofrecen llamadas de alta calidad, reducción de costos y flexibilidad para manejar llamadas en cualquier parte del mundo.",
  },
];
