import { useEffect, useRef, useState } from "react";
import "../assets/styles/home.css";
import { Card, CardContent, Typography, AspectRatio, Chip } from "@mui/joy";
import chart from "../assets/images/Group23.jpg";
import { data } from "../assets/images/images";

const cardsInfo = [
  {
    title: "10 semestres",
    text: "Duración de 5 años en la carrera más demandada de los últimos años",
    img: "https://images.unsplash.com/photo-1601342630314-8427c38bf5e6?q=80&w=691&auto=format&fit=crop",
  },
  {
    title: "Tecnologías demandadas",
    text: "Aprende las tecnologías más demandadas del mercado laboral y las más usadas en la actualidad",
    img: "https://images.unsplash.com/photo-1565687981296-535f09db714e?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Formando ingenieros para el Futuro",
    text: "Aprende Inteligencia Artificial y conviértete en un desarrollador para el futuro",
    img: "https://plus.unsplash.com/premium_photo-1682124445940-1c248d19ad0b?q=80&w=1170&auto=format&fit=crop",
  },
];

const news = [
  {
    title: "Lanzamiento del nuevo laboratorio de IA",
    text: "La Facultad de Ingeniería en Software inauguró un nuevo laboratorio especializado en Inteligencia Artificial para proyectos estudiantiles e investigaciones académicas.",
    img: "https://images.unsplash.com/photo-1565687981296-535f09db714e?q=80&w=1170&auto=format&fit=crop",
    category: "Novedad"
  },
  {
    title: "Ganadores del hackathon 2025",
    text: "Estudiantes de la carrera ganaron el primer lugar en el Hackathon Nacional 2025 con una app que detecta fraudes financieros usando machine learning.",
    img: "https://images.unsplash.com/photo-1565687981296-535f09db714e?q=80&w=1170&auto=format&fit=crop",
    category: "Noticia"
  },
  {
    title: "Convocatoria a pasantías internacionales",
    text: "Se abren las inscripciones para el programa de pasantías en empresas tecnológicas en Alemania, Japón y Estados Unidos. Postulaciones abiertas hasta el 20 de julio.",
    img: "https://images.unsplash.com/photo-1565687981296-535f09db714e?q=80&w=1170&auto=format&fit=crop",
    category: "Noticia"
  },
  {
    title: "Nuevo curso de desarrollo con Rust",
    text: "Desde el próximo semestre se incluirá en la malla curricular un nuevo curso optativo sobre desarrollo de sistemas de alto rendimiento usando Rust.",
    img: "https://images.unsplash.com/photo-1565687981296-535f09db714e?q=80&w=1170&auto=format&fit=crop",
    category: "Novedad"
  }
];


const Home = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode?.querySelectorAll("li > img")[currentIndex];
    imgNode?.scrollIntoView({ behavior: "smooth" });
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    setCurrentIndex((curr) =>
      direction === "prev"
        ? Math.max(curr - 1, 0)
        : Math.min(curr + 1, data.length - 1)
    );
  };

  return (
    <div className="container">
      <section className="main-container">
        <div className="slider-container">
          <button className="arrow leftArrow" onClick={() => scrollToImage("prev")}>
            &#10094;
          </button>
          <button className="arrow rightArrow" onClick={() => scrollToImage("next")}>
            &#10095;
          </button>
          <div className="container-images">
            <ul ref={listRef}>
              {data.map(({ id, imgUrl }) => (
                <li key={id}>
                  <img src={imgUrl} alt={`Slide ${id}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cards-container">
        <div className="cards">
          {cardsInfo.map(({ title, text, img }, index) => (
            <Card
              key={index}
              className="custom-card"
              variant="plain"
              sx={{
                borderRadius: "15px",
                paddingBottom: "40px",
              }}
            >
              <AspectRatio minHeight="120px" maxHeight="450px" sx={{ mb: 3 }}>
                <img src={img} alt={title} />
              </AspectRatio>
              <CardContent>
                <Typography level="title-lg">{title}</Typography>
                <Typography level="body-md">{text}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="chart">
        <div className="chart-image">
          <img src={chart} alt="Chart" />
        </div>
        <div className="title">
          <Typography level="title-lg" sx={{ fontSize: "50px" }}>
            La profesión con más crecimiento laboral de los últimos años
          </Typography>
        </div>
      </section>

      <section className="news-sections">
        <div className="news-section-title">
          <Typography level="h2">Noticias y Novedades</Typography>
        </div>
        <div className="news">
          {news.map(({title, text, img, category}, index) => (
            <div className="new"
              key={index}
            >
              <div className="new-content">
                <Chip color="primary">{category}</Chip>
                <Typography level="h4">{title}</Typography>
                <Typography level="body-md">{text}</Typography> 
              </div>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
