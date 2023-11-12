import './App.css';
import React, {useState} from 'react';
function App() {
  const [Nombre, setNombre] = useState('');
  const [Edad,setEdad] = useState(17);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  
  const handleInputChange = (e) => {
    setNombre(e.target.value);
  };
  const handleInputChange1 = (e) => {
    setEdad(e.target.value)
  };
  const clicked = () => {
    setShow(false);
    setShow1(false);
    setShow(!show);
    setNombre("");
    setEdad(17);
  };
  return (

    <div className="App">
      <h1>Bienvenido usted es:</h1>
      <p><button onClick={clicked}>Estudiante</button>  o  <button onClick={clicked}>Padre de famila</button></p>
      {
          show && <section className='Final_SetupE'>
                       <br></br>
                       <h2>Ingresa tu Nombre completo:<input type="text" placeholder='Ingresa tu nombre' value={Nombre} onChange={handleInputChange} /></h2> 
                      <br></br>
                      <h2>Edad: <input type="number" value={Edad} min="17" max="50"
                      onChange={handleInputChange1} /></h2>
                      <br></br>
                      <button onClick={()=> setShow1(!show1)}>Ingresar a la pagina</button>
                      <br></br>
                      <br></br>
                      <br></br>
                  </section>
                  
      }
      {
        show1 && (
          <section className='Pagina'>
              {Edad <= 30 ?
              <section className='Titulo'>
                <h1>Bienvenido {Nombre} a la pagina de UX </h1>
                <br></br>
                <br></br>
                <section className='Contenido'>
                  <h2>
                    Que es UX?
                    <br></br>
                  </h2>
                  <img src="./images/UXE.jpeg" alt=''></img>
                  <p>
                  La Experiencia del Usuario, o UX, es un concepto clave en el mundo de la ingeniería en sistemas computacionales. 
                  Imagina que estás diseñando o creando una aplicación o un sitio web. Ahí es donde entra en juego la UX.
                   En lugar de centrarse solo en la funcionalidad técnica, la UX se enfoca en cómo se siente y cómo interactúa una persona común con el sistema que estás construyendo.
                  <br></br>
                  Piensa en ello como el diseño de una silla. No solo te preocupas por si la silla es funcional y sostiene a alguien, 
                  también te importa que sea cómoda, fácil de usar y que se adapte a la forma en que la gente quiere sentarse.
                   Lo mismo sucede con la UX: se trata de hacer que la interacción de una persona con un software o un sistema sea lo más fácil, eficiente y agradable posible.
                   <br></br>
                   <br></br>
                  </p>
                  <h2>
                    Es UX difícil de aprender?
                    <br></br>
                  </h2>
                  <p>
                  La dificultad en experiencia de usuario para alguien con formación en ingeniería de sistemas es transición de un enfoque técnico a uno centrado en el usuario.
                  Mientras que la ingeniería se enfoca en la implementación eficiente de soluciones, UX implica comprender las necesidades y comportamientos de los usuarios. 
                  Requiere habilidades interdisciplinarias, como empatía, diseño centrado en el usuario y pruebas de usabilidad. La dificultad radica en equilibrar la funcionalidad técnica con la usabilidad y la experiencia del usuario. 
                  <br></br>
                  <br></br>
                  </p>
                  <h2>
                  Que software se puede usar para practicar UX?
                  <br></br>
                  </h2>
                  <p>
                  Para practicar UX, hay varias herramientas disponibles que pueden ayudarte a crear y desarrollar páginas web, los mejores Frameworks para Front-end son:
                  <br></br>
                  <br></br>React.js: Biblioteca de JavaScript para construir interfaces de usuario interactivas.
                  <br></br>Angular: Framework de desarrollo para construir aplicaciones web dinámicas.
                  <br></br>Vue.js: Framework progresivo de JavaScript para construir interfaces de usuario.
                  </p>
                  <img src="./images/React.jpeg" alt='' className='FRONTE'></img>
                  <img src="./images/Angular.jpeg" alt='' className='FRONTE'></img>
                  <img src="./images/Vue_js.jpeg" alt='' className='FRONTE'></img>
                  <h2>
                  Links para heramientas para UX:
                  <br></br>
                  </h2>
                  <p>
                  W3school:<a href="https://www.w3schools.com">Visita la pagina pls</a>
                  React:<a href="https://legacy.reactjs.org">Visita la pagina pls</a>
                  NodeJS:<a href="https://nodejs.org/en/">Visita la pagina pls</a>
                  </p>
                </section>
              </section>
              : 
              <section className='Titulo'>
                <h1>Bienvenido {Nombre} a la pagina de UX </h1>
                <section className='Contenido'>
                  <h2>
                  Que es UX?
                  <br></br>
                  </h2>
                  <img src="./images/UXP.jpeg" alt=''></img>
                  <p>
                  La Experiencia del Usuario, o UX, es un concepto clave en el mundo de la ingeniería en sistemas computacionales. 
                  <br></br>Imagina que estás diseñando o creando una aplicación o un sitio web. Ahí es donde entra en juego la UX.
                  <br></br> En lugar de centrarse solo en la funcionalidad técnica, la UX se enfoca en cómo se siente y cómo interactúa una persona común con el sistema que estás construyendo.
                  <br></br>
                  <br></br>Piensa en ello como el diseño de una silla. No solo te preocupas por si la silla es funcional y sostiene a alguien, 
                  <br></br>también te importa que sea cómoda, fácil de usar y que se adapte a la forma en que la gente quiere sentarse.
                  <br></br> Lo mismo sucede con la UX: se trata de hacer que la interacción de una persona con un software o un sistema sea lo más fácil, eficiente y agradable posible.
                  <br></br>
                  <br></br>
                  </p>
                  <h2>
                  Que utilidad tiene UX en el campo de la informática?
                  <br></br>
                  </h2>
                  <p>
                  La Experiencia de Usuario juega un papel fundamental en el campo de la informática por varias razones:
                  <br></br>1. Satisfacción del Usuario: La UX se centra en comprender y satisfacer las necesidades del usuario. Un software con una buena experiencia de usuario tiende a ser más aceptado y utilizado, lo que se traduce en usuarios más satisfechos.
                  <br></br>
                  <br></br>2. Eficiencia y Productividad: Diseñar interfaces intuitivas y eficientes mejora la productividad. Los usuarios pueden realizar tareas de manera más rápida y efectiva, lo que a su vez aumenta la eficiencia en el uso del software.
                  <br></br>
                  <br></br>3. Reducción de Errores: Una buena UX ayuda a minimizar los errores del usuario al interactuar con el software. Interfaces claras y procesos intuitivos reducen la probabilidad de malentendidos y acciones incorrectas.
                  <br></br>
                  <br></br>4. Aumento de la Retención de Usuarios: Los usuarios son más propensos a seguir utilizando un software si tienen una experiencia positiva. La retención de usuarios es esencial para el éxito a largo plazo de cualquier producto informático.
                  <br></br>
                  <br></br>5. Competitividad en el Mercado: En un mercado saturado de opciones, la experiencia del usuario puede marcar la diferencia. Las empresas que priorizan la UX tienden a destacar y ganar la preferencia del usuario.
                  <br></br>
                  <br></br>6. Adaptación a Diversidad de Usuarios: La UX también se ocupa de la accesibilidad, garantizando que el software sea utilizable por una variedad de usuarios, incluyendo aquellos con discapacidades. Esto amplía la audiencia potencial del software.
                  <br></br>
                  <br></br>7. Retroalimentación y Mejora Continua: La retroalimentación del usuario es una parte integral de la UX. Recopilar comentarios y datos sobre el comportamiento del usuario permite realizar mejoras continuas en el diseño y la funcionalidad del software.
                  <br></br>
                  <br></br>
                  </p>
                  <h2>
                  Que beneficios trae estudiar UX?
                  <br></br>
                  </h2>
                  <p>
                  Estudiar Experiencia de Usuario ofrece varios beneficios tanto a nivel profesional como para el desarrollo de productos. Algunos de estos beneficios incluyen:
                  <br></br>
                  <br></br>1. Demanda Laboral: La creciente conciencia sobre la importancia de la UX ha aumentado la demanda de profesionales capacitados en este campo. Estudiar UX puede abrir oportunidades laborales en diversas industrias.
                  <br></br>
                  <br></br>2. Mejora de Habilidades de Diseño: Adquirir conocimientos en UX implica desarrollar habilidades de diseño centrado en el usuario, lo que mejora la capacidad para crear interfaces intuitivas y atractivas.
                  <br></br>
                  <br></br>3. Innovación: La perspectiva centrada en el usuario que proporciona la UX fomenta la innovación. Comprender las necesidades y deseos de los usuarios puede conducir a la creación de soluciones únicas y diferenciadas en el mercado.
                  <br></br>
                  </p>
                  <h2>
                  Links para atriculos sob UX:
                  </h2>
                  <p>
                  Why UX design is so important for business:<a href="https://online.rmit.edu.au/blog/why-ux-design-so-important-business">Visita la pagina pls</a>
                  The importance of UX Design:<a href="https://www.rocket55.com/lab-note/the-importance-of-user-experience/">Visita la pagina pls</a>
                  </p>
                </section>
              </section>}
          </section>
        )
      }
    </div>
   
  );
}

export default App;
