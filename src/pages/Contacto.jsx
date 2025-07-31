import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Divider,
  Typography,
  IconButton,
  Accordion,
  AccordionGroup,
  AccordionSummary,
  AccordionDetails,
} from "@mui/joy";
import "../assets/styles/contactPage.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GroupsIcon from "@mui/icons-material/Groups";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import MapView from "../components/MapView";

const Contacto = () => {
  return (
  <div className="container">
    <div className="contact">
        <section className="contact-form-container">
            <Typography level="h3" sx={{ fontSize: "60px", marginBottom: '40px' }}>
                Contact Us
            </Typography>
            <div className="contact-form">
                <div>
                    <FormLabel>Nombre</FormLabel>
                    <Input />
                </div>

                <div>
                    <FormLabel>Correo</FormLabel>
                    <Input />
                </div>

                <div>
                    <FormLabel>Número Telefonico</FormLabel>
                    <Input />
                </div>

                <div>
                    <FormLabel>Número Telefonico</FormLabel>
                    <Input />
                </div>

                <div>
                    <FormLabel>Mensaje</FormLabel>
                    <Textarea minRows={3} />
                </div>

                <Button>Submit</Button>
            </div>
        </section>

        <Divider orientation="vertical" />

        <section className="contact-info">
          <div className="phone_number">
            <Typography level="title-lg" startDecorator={<LocalPhoneIcon />}>
              Llamanos
            </Typography>
            <Typography level="body-md">
              En nuestros call center podremos ayudarte con cualquier duda sobre
              el proceso de matriculación
            </Typography>
          </div>
          <div className="addres">
            <Typography level="title-lg" startDecorator={<LocationOnIcon />}>
              Ubicanos
            </Typography>
            <Typography level="body-md">
              Nuestra Facultad esta ubicada en las calles Victor Manuel Rendon y
              Boyaca
            </Typography>
          </div>
          <div className="media">
            <Typography level="title-lg" startDecorator={<GroupsIcon />}>
              Redes Sociales
            </Typography>
            <Typography level="body-md">
              Mantente al tanto de noticias y novedades de la universad mediante
              nuestras redes sociales
            </Typography>
            <IconButton>{<InstagramIcon />}</IconButton>
            <IconButton>{<FacebookIcon />}</IconButton>
            <IconButton>{<XIcon />}</IconButton>
          </div>
        </section>
      </div>

      <section className="map">
        <MapView />
      </section>

      <section className="Fquestions">
        <div className="faq-title">
          <Typography level="h4">FAQ</Typography>
          <Typography level="h2" sx={{ fontSize: "60px" }}>
            Preguntas más Frecuentes
          </Typography>
        </div>
        
        <div className="accordion-faq">
            <div className="accordion-text">
                <Typography level="h3">Lorem ipsum dolor sit amet</Typography>
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s
                </Typography>
            </div>
            
            <AccordionGroup size="large">
                <Accordion>
                    <AccordionSummary>
                        <Typography sx={{ fontSize: "24px" }}>
                            lorep ipsum ajuko alim
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining
                            essentially unchanged.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        <Typography sx={{ fontSize: "24px" }}>
                            lorep ipsum ajuko alim
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining
                            essentially unchanged.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        <Typography sx={{ fontSize: "24px" }}>
                            lorep ipsum ajuko alim
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining
                            essentially unchanged.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        <Typography sx={{ fontSize: "24px" }}>
                            lorep ipsum ajuko alim
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining
                            essentially unchanged.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        <Typography sx={{ fontSize: "24px" }}>
                            lorep ipsum ajuko alim
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining
                            essentially unchanged.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
          </AccordionGroup>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
