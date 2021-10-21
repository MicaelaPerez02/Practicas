/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  const anioActual = 2021;
  datosPersona.nombre = prompt("Ingrese su nombre");
  datosPersona.edad = parseInt(anioActual -(prompt("Ingrese su año de nacimiento")));
  datosPersona.ciudad = prompt("Ingrese su ciudad");
  datosPersona.interesPorJs = confirm("¿Tiene intereses por JS?") ? "Si" : "No";
}
  
function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector('#nombre').innerHTML = datosPersona.nombre;
  document.querySelector('#edad').innerHTML = datosPersona.edad;
  document.querySelector('#ciudad').innerHTML = datosPersona.ciudad;
  document.querySelector('#javascript').innerHTML = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const filaMaterias = document.querySelector("#fila");
  if(filaMaterias.innerHTML <= listado.length){
    listado.forEach(materia => {
    filaMaterias.innerHTML += 
    `<article class = 'caja'>
      <img src = "${materia.imgUrl}" alt = "${materia.lenguajes}"></img>
      <p class = 'lenguajes'>${materia.lenguajes}</p>
      <p class = 'bimestre'> ${materia.bimestre}</p>
    </article>`
  })
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const selecSitio = document.querySelector('#sitio');
  selecSitio.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const sobreMi = document.querySelector('#sobre-mi');
document.addEventListener('keypress', function(tecla){
  if(tecla.key === "F" || tecla.key === "f"){
    sobreMi.classList.remove('oculto')
  }
})
