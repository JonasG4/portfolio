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
              <a className="btn btn-mgreen text-light" href="#contacto">Contactar </a>
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

      <div id="sobreMi" className="container-fluid w-100 d-flex flex-column justify-content-center align-items-center aboutMe-Container mb-5">
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
              <div className="col-md-5 d-flex justify-content-center align-items-center">
                <img src="img/bio.jpg" className="img-fluid rounded" alt="..." />
              </div>
              <div className="col-md-7">
                <div className="card-body px-5 pt-4">
                  <p className="card-text text-justify">
                    Soy un desarrollador web full stack que vive en San Miguel, El Salvador. Actualmente curso el 5to año de la carrera de Ingenieria en Desarrollo Software en la Universidad de Oriente (UNIVO).
                    Desarrollo aplicaciones web combinando la logica y el diseño para ofrecer un producto con interfaz amigable, accesible y escalable siguendo las mejores practicas de programacion.
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

      <div id="portfolio" className="portfolio-container container-fluid py-5 bg-mblue">
        <section className="heading-container d-flex justify-content-center align-items-center flex-column w-100">
          <h2 className="heading-title text-light fw-bold">Portafolio</h2>
          <h5 className="heading-subtitle fw-light text-light">Mi biografia formal</h5>
          <div className="heading-separator">
            <div className="separator-line bg-light"></div>
            <div className="separator-blob">
              <div className="blob-shape bg-mgreen"></div>
            </div>
          </div>
        </section>
        <div className="d-flex align-align-items-center">
          <div className="container-fluid d-flex justify-content-center portfolio-body flex-sm-column flex-lg-row flex-md-row flex-column">
            <div className="nav flex-column nav-pills  bg-dblue p-3 rounded-3 align-items-center justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button className="nav-link btn-link active" id="v-pills-skills-tab" data-bs-toggle="pill" data-bs-target="#v-pills-skills" type="button" role="tab" aria-controls="v-pills-skills" aria-selected="true">Habilidades</button>
              <button className="nav-link btn-link" id="v-pills-proyects-tab" data-bs-toggle="pill" data-bs-target="#v-pills-proyects" type="button" role="tab" aria-controls="v-pills-proyects" aria-selected="false">Proyectos</button>
            </div>
            <div className="tab-content bg-light w-50 p-4 rounded-3" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-skills" role="tabpanel" aria-labelledby="v-pills-skills-tab">
                <div className="row mb-3">
                  <div className="col">
                    <h5 className="text-dblue">
                      <span className="px-lg-2">
                        <i className="fab fa-react text-primary"></i>
                      </span>
                      React Js
                    </h5>
                    <div className="progress">
                      <div className="progress-bar bg-mgreen w-react" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="col">
                    <h5 className="text-dblue">
                      <span className="px-lg-2">
                        <i className="fab fa-node-js text-primary"></i>
                      </span>
                      Node Js
                    </h5>
                    <div className="progress">
                      <div className="progress-bar bg-mgreen w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <h5 className="text-dblue">
                      <span className="px-lg-2">
                        <i className="fab fa-java text-primary"></i>
                      </span>
                      Java
                    </h5>
                    <div className="progress">
                      <div className="progress-bar bg-mgreen w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="col">
                    <h5 className="text-dblue">
                      <span className="px-lg-2">
                        <i className="fas fa-hashtag text-primary"></i>
                      </span>
                      C Sharp
                    </h5>
                    <div className="progress">
                      <div className="progress-bar bg-mgreen w-50" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <h5 className="text-dblue">
                      <span className="px-lg-2">
                        <i className="fab fa-python text-primary"></i>
                      </span>
                      Python
                    </h5>
                    <div className="progress">
                      <div className="progress-bar bg-mgreen w-react" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="col">
                    <h5 className="text-dblue">
                      <span className="px-lg-2">
                        <i className="fab fa-php text-primary"></i>
                      </span>
                      PHP
                    </h5>
                    <div className="progress">
                      <div className="progress-bar bg-mgreen w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <h5 className="text-dblue">
                      <span className="px-lg-2">
                        <i className="fab fa-html5 text-primary"></i>
                      </span>
                      HTML
                    </h5>
                    <div className="progress">
                      <div className="progress-bar bg-mgreen w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="col">
                    <h5 className="text-dblue">
                      <span className="px-lg-2">
                        <i className="fab fa-css3-alt text-primary"></i>
                      </span>
                      CSS
                    </h5>
                    <div className="progress">
                      <div className="progress-bar bg-mgreen w-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <h5 className="text-dblue">
                      <span className="px-lg-2">
                        <i className="fas fa-database text-primary"></i>
                      </span>
                      PostgreSQL
                    </h5>
                    <div className="progress">
                      <div className="progress-bar bg-mgreen w-react" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="col">
                    <h5 className="text-dblue">
                      <span className="px-lg-2">
                        <i className="fas fa-database text-primary"></i>
                      </span>
                      Mongo DB
                    </h5>
                    <div className="progress">
                      <div className="progress-bar bg-mgreen w-50" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade " id="v-pills-proyects" role="tabpanel" aria-labelledby="v-pills-proyects-tab">
                <div className="row">
                  <div className="card col-12 col-lg col-sm-12">
                    <img src="img/ohara.png" className="card-img-top card-img-h" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title h6">Sistema bibliotecario OHARA</h5>
                      <p className="card-text">Usando PHP puro creamos un sistema para automatizar todos los procesos de una biblioteca.</p>
                    </div>
                  </div>
                  <div className="card col-12 col-lg col-sm-12">
                    <img src="img/moneyexpress.png" className="card-img-top card-img-h" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title h6">Gestión de cartera MoneyExpress</h5>
                      <p className="card-text">Aplicacion android para gestionar las finanzas usando Java y Firebase para su creación.</p>
                    </div>
                  </div>
                  <div className="card col-12 col-lg col-sm-12">
                    <img src="img/SRF.jpg" class="card-img-top card-img-h" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title h6">Sistema de Registro Familiar</h5>
                      <p className="card-text">Forme parte de un proyecto freelance para una alcaldia que necesitaba renovar su sistema de registro familiar. Usamos PHP con Sympony y MySQL.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contacto mt-5" id="contacto">
        <section className="heading-container d-flex justify-content-center align-items-center flex-column w-100">
          <h2 className="heading-title text-dblue fw-bold">Contáctame</h2>
          <h5 className="heading-subtitle fw-light">Contacto directo</h5>
          <div className="heading-separator">
            <div className="separator-line"></div>
            <div className="separator-blob">
              <div className="blob-shape"></div>
            </div>
          </div>
        </section>

        <div className="container-fluid w-25 bg-mblue p-4 rounded mb-5">
        <form action="">
        <div class="mb-3">
            <label class="form-label text-light">Nombre</label>
            <input type="text" className="form-control" placeholder="Escribe tu nombre..." />
          </div>
          <div class="mb-3">
            <label class="form-label text-light">Correo Electronico</label>
            <input type="email" className="form-control" placeholder="Escribe tu correo electronico..." />
          </div>
          <div className="mb-3">
            <label class="form-label text-light">Mensaje</label>
            <textarea className="form-control" rows="3">Empieza a escribir tu mensaje...</textarea>
          </div>
          <div className="mb-3 d-flex w-100 justify-content-center">
            <button type="submit" className="btn btn-mgreen">Enviar</button>
          </div>
        </form>
        </div>
      </div>

    </div>

  );
}
