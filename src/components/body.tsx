import "./body.css";
import PlanetasInici from "../assets/planetas-inicial.svg";
import CirculoUno from "../assets/imagenunopr.svg";
import CirculoDos from "../assets/imagendospr.svg";
import CirculoTres from "../assets/imagentrespr.svg";

function Body() {
  return (
    <body className="body" id="root">
      <div className="cabecera">
        <div className="textos">
          <h1>
            Explora las <span className="color1">galaxias</span>,{" "}
            <span className="color2">planetas</span> y{" "}
            <span className="color3">estrellas</span> del lenguaje
          </h1>
          <h2>
            Somos un espacio dedicado al aprendizaje y apoyo, en donde podrás
            acceder a una gran variedad de contenidos relacionados con los
            trastornos de la comunicación.
          </h2>
          <button>!CONOCE MÁS¡</button>
        </div>
        <img src={PlanetasInici} />
      </div>

      <div className="cuerpo">
        <h1 className="TituloCuerpo">¿QUÉ TE OFRECEMOS?</h1>

        <div className="TextosPrimero">
          <h2>
            Contamos con diversas actividades, ejercicios y herramientas ideales
            para toda persona que presente alguna condición del lenguaje.
          </h2>
          <button>JUEGA Y APRENDE</button>
        </div>
        <div className="ImagenUno">
          <img src={CirculoUno} />
        </div>
        <div className="TextosSegundo">
          <h2>
            Somos una comunidad siempre activa y con ganas de conocer más.
            Impulsamos la investigación y comunicación.
          </h2>
          <button>VISITANOS Y COLABORA</button>
        </div>
        <div className="ImagenDos">
          <img src={CirculoDos} />
        </div>
        <div className="TextosTercero">
          <h2>
            Ofrecemos un espacio de encuentro a distancia entre doctores,
            terapistas y pacientes; de esta manera contribuimos a su
            rehabilitación.
          </h2>
          <button>NUESTROS EXPERTOS</button>
        </div>
        <div className="ImagenTres">
          <img src={CirculoTres} />
        </div>
      </div>

      <div className="fondo">
        <h2>
          En Universo Fono abrazamos las diferencias.<br></br>{" "}
          <span className="color4">¡Acompáñanos en nuestra aventura!</span>
        </h2>
        <button>UNETE!</button>
      </div>
    </body>
  );
}
export default Body;
