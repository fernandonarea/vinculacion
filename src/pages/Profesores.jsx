import { Chip, Typography } from "@mui/joy";
import "../assets/styles/Teachers.css";
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";
import { useState } from "react";

const Profesores = () => {
  const profesores_info = [
    {
      teacher_name: "Dra. Ana María Torres",
      title: "Doctora en Ingeniería de Software",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
      email: "ana.torres@universidad.edu.ec",
      phone: "+593 987654321",
      area: "Desarrollo Web y Arquitectura de Software",
      bio: "Profesora e investigadora en desarrollo de aplicaciones escalables. Ha participado en proyectos internacionales y lidera el grupo de innovación en tecnologías web.",
    },
    {
      teacher_name: "Ing. Carlos Pérez",
      title: "Ingeniero en Sistemas",
      photo:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
      email: "carlos.perez@universidad.edu.ec",
      phone: "+593 912345678",
      area: "Redes y Ciberseguridad",
      bio: "Experto en redes, seguridad informática y hacking ético. Imparte clases desde hace 10 años y asesora proyectos en infraestructura crítica.",
    },
    {
      teacher_name: "MSc. Daniela Herrera",
      title: "Magíster en Inteligencia Artificial",
      photo:
        "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      email: "daniela.herrera@universidad.edu.ec",
      phone: "+593 911223344",
      area: "Machine Learning y Ciencia de Datos",
      bio: "Apasionada por la IA aplicada. Investiga sobre modelos predictivos y es mentora de clubes estudiantiles de tecnología.",
    },
    {
      teacher_name: "PhD. Rodrigo Almeida",
      title: "Doctor en Ciencias de la Computación",
      photo:
        "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      email: "rodrigo.almeida@universidad.edu.ec",
      phone: "+593 943217654",
      area: "Teoría de la Computación y Programación Funcional",
      bio: "Autor de múltiples publicaciones científicas. Ha sido conferencista en eventos internacionales y promueve la enseñanza avanzada de la programación.",
    },
    {
      teacher_name: "Ing. Verónica Montalvo",
      title: "Ingeniera en Telecomunicaciones",
      photo:
        "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      email: "veronica.montalvo@universidad.edu.ec",
      phone: "+593 934567891",
      area: "Sistemas Embebidos y Electrónica",
      bio: "Docente apasionada por la robótica educativa y la automatización industrial. Ha coordinado múltiples ferias tecnológicas estudiantiles.",
    },
  ];

  const filters = () => {
    const [filtro, setFiltro] = useState("");

    const profesoresFiltrados = profesores_info.filter((p) =>
      p.area.toLowerCase().includes(filtro.toLowerCase)
    );
  };

  return (
    <div className="container">
      <div className="teachers-title">
        <Typography level="title-lg" sx={{ fontSize: "80px" }}>
          Profesores que <Typography color="primary">guiarán</Typography> tu
          camino a la <Typography color="primary">excelencia</Typography>
        </Typography>
      </div>

      <div></div>

      <div className="teacher-list-container">
        <div className="teacher-list">
          {profesores_info.map(
            ({ teacher_name, title, photo, email, area, bio }, index) => (
              <div className="teachers" key={index}>
                <img src={photo} alt="" />
                <div className="teachers-content">
                  <div>
                    <Typography level="title-md">{teacher_name}</Typography>
                    <Typography level="title-sm">{title}</Typography>
                  </div>
                  <Typography level="body-md">{bio}</Typography>
                  <Chip variant="outlined" color="primary">
                    {area}
                  </Chip>
                  <Typography
                    level="body-sm"
                    startDecorator={
                      <AlternateEmailSharpIcon fontSize="small" />
                    }
                  >
                    {email}
                  </Typography>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Profesores;
