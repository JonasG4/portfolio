import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./Profile.css";
import Navbar from './Navbar'

export default function Profile() {
  const textRef = useRef();

  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 200,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web", "Full Stack", "MERN", "Mobile"],
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container-fluid d-flex flex-lg-column w-100 justify-content-center align-items-center profile-container" id="inicio">
        <div className="profile-parent d-flex flex-lg-row justify-content-center align-items-center w-100 gap-lg-5 gap-md-3 mt-md-5 flex-sm-column-reverse">
          <div className="profile-details">
            <div className="d-flex gap-4  justify-content-center align-items-center">
              <a href="https://www.facebook.com/jonas.garcia711/">
                <i className="fa fa-facebook-square text-light"></i>
              </a>
              <a href="https://www.instagram.com/jonasgarcia8/">
                <i className="fa fa-instagram text-light"></i>
              </a>
              <a href="https://twitter.com/Jonas_899">
                <i className="fa fa-twitter-square text-light"></i>
              </a>
              <a href="https://www.linkedin.com/in/jonas-garcia-695035224/">
                <i className="fab fa-linkedin text-light"></i>
              </a>
              <a href="https://github.com/JonasG4">
                <i className="fab fa-github-square text-light"></i>
              </a>
            </div>
            <div className="profile-details-name d-flex justify-content-center">
              <span className="fw-bold text-light">
                {""}
                Hola, me llamo <span className="text-mgreen">Jonas Garcia</span>
              </span>
            </div>
            <div className="profile-details-role d-flex justify-content-center">
              <span className="text-center text-light">
                {""}
                <h1 className="my-3">
                  {" "}
                  Desarrollador{" "}
                  <span className="text-mgreen" ref={textRef}></span>
                </h1>
                <span className="profile-role-tagline">
                  Desarrollando aplicaciones con conocimientos front-end y
                  back-end
                </span>
              </span>
            </div>
            <div className="profile-options d-flex flex-row justify-content-center gap-5 my-3">
              <button className="btn btn-mgreen text-light"> Contactar </button>
              <a href="CV_JONAS_GARCIA.pdf" download="CV_Jonas_Garcia.pdf">
                <button className="btn btn-outline-mgreen">
                  Descargar CV <span><i className="fas fa-download"></i></span>
                </button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <img src="img/profile.png" alt="Foto de perfil Jonas Garcia" className="img-fluid img" />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1a2138" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,186.7C384,192,480,160,576,128C672,96,768,64,864,80C960,96,1056,160,1152,192C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

      <div id="sobreMi" className="container-fluid w-100 d-flex flex-column justify-content-center align-items-center aboutMe-Container">
        <section className="heading-container d-flex justify-content-center align-items-center flex-column w-100">
          <h2 className="heading-title text-dblue fw-bold">Sobre mí</h2>
          <h5 className="heading-subtitle fw-light">¿Por qué elegirme?</h5>
          <div className="heading-separator">
            <div className="separator-line"></div>
            <div className="separator-blob">
              <div className="blob-shape"></div>
            </div>
          </div>
        </section>
        <div className="aboutMe-parent d-flex flex-row">
          <div className="card mb-3 card-aboutMe">
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img src="img/bio.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body px-5 pt-4">
                  <p className="card-text text-justify">
                   Soy un desarrollador web full stack que vive en San Miguel, El Salvador. Actualmente curso el 5to año de la carrera de Ingenieria en Desarrollo Software en la Universidad de Oriente (UNIVO). 
                   Desarrollo aplicaciones web combinando la logia y el diseño para ofrecer un producto con interfaz amigable, accesible y escalable siguendo las mejores practicas de programacion. 
                  <br /><br />
                   Me encanta enfrentarme a nuevos retos, es increible que se puedan encontrar tantas formas diferentes de resolver un solo problema y que cada respuesta sea mas mejor que la anterior. Disfruto mucho resolviendo algoritmos
                   complejos que desafian mucho mi logica.
                  </p>
                  <p className="card-text">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id="portfolio" className="portfolio-container container-fluid">
      <section className="heading-container d-flex justify-content-center align-items-center flex-column w-100">
          <h2 className="heading-title text-dblue fw-bold">Portafolio</h2>
          <h5 className="heading-subtitle fw-light">Detalles de mi biografia formal</h5>
          <div className="heading-separator">
            <div className="separator-line"></div>
            <div className="separator-blob">
              <div className="blob-shape"></div>
            </div>
          </div>
        </section>
      </div>

    </div>

  );
}
