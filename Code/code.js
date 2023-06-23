
/* 
document.getElementById('calculo').addEventListener('click', calculo);
document.getElementById('fisica').addEventListener('click', fisica);





function calculo(event) {
  event.preventDefault();

  swal({
    title: "Aviso!",
    text: "Lo siento, la página que está intentando acceder no se encuentra disponible en este momento. Estamos trabajando en la construcción de esta página web. Por favor, tenga paciencia mientras la finalizamos. Si cree que esto es un error, por favor contáctenos. El código de error correspondiente es el HTTP 404 (Not Found).",
    icon: "info",
    buttons: true,
    dangerMode: true
  }); */



/*     swal({
        title: "Los datos se han guardado correctamente!",
        text: "Ya puedes iniciar sesion con los datos ingresados para el registro",
        icon:"success",
        buttons:{
          cancel:{
            text:"regresar para corregir datos",
            value: false,
            visible: true,
            className: "",
            closeModal: true
          },
            confirm:{
            text:"Continuar",
            value: true,
            visible: true,
            className: "",
            classModal: true
          }
        }
      }).then(function(value){
        if(value){
          location.reload()
        }else{
          swal({
            title: "NO SE A MODIFICADO NADA",
            text: "Los datos no se han guardado, puedes modificar algun dato si es que a si lo deceas",
            icon: "warning",
            button: "Ok"
          })
        }
      }) */
/* }
 */

/* 
function fisica(event) {
  event.preventDefault()

  swal({
    title: "Aviso!",
    text: "Lo siento, la página que está intentando acceder no se encuentra disponible en este momento. Estamos trabajando en la construcción de esta página web. Por favor, tenga paciencia mientras la finalizamos. Si cree que esto es un error, por favor contáctenos. El código de error correspondiente es el HTTP 404 (Not Found).",
    icon: "info",
    buttons: true,
    dangerMode: true
  });

}
 */
/* La funcion de este codigo hace que se cambie de color el body junto con las cosas que tengan la clase de .dark-mode 

 const themeLightButton = document.getElementById("theme-light");
const themeDarkButton = document.getElementById("theme-dark");

themeLightButton.addEventListener("click", function() {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
});

themeDarkButton.addEventListener("click", function() {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
});

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    themeDarkButton.classList.add("active");
    document.body.classList.add("dark-mode");
  } else {
    themeLightButton.classList.add("active");
  }
} else {
  themeLightButton.classList.add("active");
}

const toggleButtons = document.querySelectorAll(".theme-button");

toggleButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    toggleButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });
    this.classList.add("active");
    const theme = this.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });
});
 */

/* En este codigo tiene una similitud pero hace que se vea la imagen de dark mode cuando esta activo el button del tema light y al revez*/
// Obtener referencias a los elementos relevantes en el HTML
const themeLightButton = document.getElementById("theme-light");
const themeDarkButton = document.getElementById("theme-dark");
const lightImage = document.getElementById("light-image");
const darkImage = document.getElementById("dark-image");

/* Cosas cuando esta activado el tema light */

// Escuchadores de eventos para los botones de tema
themeLightButton.addEventListener("click", function () {
  // Establecer el tema de luz
  document.documentElement.setAttribute("data-theme", "light");
  // Guardar la elección del usuario en localStorage
  localStorage.setItem("theme", "light");
  // Deshabilitar la imagen de tema de luz y habilitar la de tema oscuro
  themeLightButton.style.display = "none"
  lightImage.style.display = "none";
  /* Aqui habilita el tema dark el button y la imagen que tiene el boton */
  darkImage.style.display = "block";
  themeDarkButton.style.display = "block";
});

/* Cosas cuando este activado el tema de dark */

themeDarkButton.addEventListener("click", function () {
  // Establecer el tema oscuro
  document.documentElement.setAttribute("data-theme", "dark");
  // Guardar la elección del usuario en localStorage
  localStorage.setItem("theme", "dark");
  //Habilita los botones del light y la imagen del light cuando esta el tema dark activado
  themeLightButton.style.display = "block";
  lightImage.style.display = "block";
  /* Aqui se quita la imagen del button y se quita el boton */
  darkImage.style.display = "none";
  themeDarkButton.style.display = "none"
});


/* Aqui ya es aparte cuando el usuario le de click a un tema */
// Verificar si el usuario ya ha elegido un tema previamente
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  // Establecer el tema y las imágenes correspondientes
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    themeDarkButton.classList.add("active");
    document.body.classList.add("dark-mode");
    /* Aqui es cuando se refresca la pagina y si no hay un boton activado pero esta el tema puesto, hace que se habilite el boton light o dark */
    themeLightButton.style.display = "block"
    lightImage.style.display = "block";
    darkImage.style.display = "none";
    themeDarkButton.style.display = "none"
  } else {
    themeLightButton.classList.add("active");
    lightImage.style.display = "none";
    darkImage.style.display = "block";
  }
} else {
  // Establecer el tema de luz y las imágenes correspondientes para la primera visita del usuario
  themeLightButton.classList.add("active");
  lightImage.style.display = "none";
  darkImage.style.display = "block";
}

// Escuchador de eventos para cada botón de tema
const toggleButtons = document.querySelectorAll(".theme-button");
toggleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Desactivar todos los botones de tema y luego activar el seleccionado
    toggleButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    this.classList.add("active");
    // Obtener el tema seleccionado y establecerlo
    const theme = this.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", theme);
    // Establecer las imágenes correspondientes para el tema seleccionado
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      lightImage.style.display = "block";
      darkImage.style.display = "none";
    } else {
      document.body.classList.remove("dark-mode");
      lightImage.style.display = "none";
      darkImage.style.display = "block";
    }
  });
});






const colorButton = document.getElementById("color-button");
const fisicaButton = document.getElementById("fisica-button");
const ecologia = document.getElementById("ecologia");
const calculo1 = document.getElementById("calculo1");
const ingles = document.getElementById("ingles");
const fisica1 = document.getElementById("fisica1");


colorButton.addEventListener("click", function () {
  document.body.classList.toggle("color-off");
  document.body.classList.toggle("colors");

  if (document.body.classList.contains("color-off")) {
    colorButton.textContent = "Colores: Apagados";
    colorButton.style.background = "#808080";
    colorButton.style.color = "#fff";
    /* ecologia.style.background = "rgba(128, 128, 128, 0.689)"; */

    // Agregar regla de CSS para hover en "ecologia" cuando el botón esté en modo "off"

    ecologia.addEventListener("mouseover", function () {
      this.style.background = "rgba(128, 128, 128, 0.689)";
      this.style.color = "#000000";
    });
    ecologia.addEventListener("mouseout", function () {
      this.style.background = "";
    });

    /* Cambiar en calculo */

    calculo1.addEventListener("mouseover", function () {
      this.style.background = "rgba(128, 128, 128, 0.689)";
      this.style.color = "#000000";
    });
    calculo1.addEventListener("mouseout", function () {
      this.style.background = "";
    });


    /* Cambiar en ingles */

    ingles.addEventListener("mouseover", function () {
      this.style.background = "rgba(128, 128, 128, 0.689)";
      this.style.color = "#000000";
    });
    ingles.addEventListener("mouseout", function () {
      this.style.background = "";
    });


    /* Cambiar en fisica */


    fisica1.addEventListener("mouseover", function () {
      this.style.background = "rgba(128, 128, 128, 0.689)";
      this.style.color = "#000000";
    });
    fisica1.addEventListener("mouseout", function () {
      this.style.background = "";
    });


  } else {
    colorButton.textContent = "Colores: Activos";
    colorButton.style.background = "linear-gradient(250deg, #33cc33, rgba(0, 208, 255, 0.712), #ffcc00, #cc33ff, #ff3366)";
    colorButton.style.color = "#fff";


    // Agregar regla de CSS para hover en "ecologia" cuando el botón esté en modo "on"

    ecologia.addEventListener("mouseover", function () {
      this.style.background = "linear-gradient(250deg, #33cc33, rgba(0, 208, 255, 0.712) )";
      this.style.color = "#000000";
    });
    ecologia.addEventListener("mouseout", function () {
      this.style.background = "";
      this.style.color = "";
    });

    /* cambiar el color del hover en calculo */

    calculo1.addEventListener("mouseover", function () {
      this.style.background = "linear-gradient(250deg, red, blue)";
      this.style.color = "#000000";
    });
    calculo1.addEventListener("mouseout", function () {
      this.style.background = "";
      this.style.color = "";
    });

    /* Cambiar el color del hober en ingles */

    ingles.addEventListener("mouseover", function () {
      this.style.background = "linear-gradient(360deg, white, red, white, red, white, red, white, red, white, blue, white, blue, white)";
      this.style.color = "#000000";
    });
    ingles.addEventListener("mouseout", function () {
      this.style.background = "";
      this.style.color = "";
    });


    /* Cambiar colores en el hover en fisica */

    fisica1.addEventListener("mouseover", function () {
      this.style.background = "linear-gradient(300deg, red, green, blue, orangered, red, green, blue, orange)";
      this.style.color = "#000000";
    });
    fisica1.addEventListener("mouseout", function () {
      this.style.background = "";
      this.style.color = "";
    });

  }
});







/* const spamEcologia = document.querySelector('.spam-ecologia');

ecologia.addEventListener('mouseover', () => {
  spamEcologia.classList.add('mostrar'); /* Agregamos la clase "mostrar" al hacer hover 
});

ecologia.addEventListener('mouseout', () => {
  spamEcologia.classList.remove('mostrar'); /* Removemos la clase "mostrar" al salir del hover 
}); */



window.addEventListener('load', function () {
  if (window.innerWidth >= 360 && window.innerWidth <= 720) {

    swal({
      title: "Aviso",
      text: "Esta página tiene activado el scroll vertical. Puedes desplazarte por la página cuando lo necesites.",
      icon: "info",
      timer: 6500,
      buttons: false,
      dangerMode: true,
    });

  }
});








/* ECOLOGIA, ENTRAR A LA MATERIA */


document.getElementById('ecologia').addEventListener('click', function () {
  window.location.href = "./ecologia/ecologia.html";
});


/* CALCULO, ENTRAR A LA MATERIA */

document.getElementById('calculo1').addEventListener('click', function () {
  window.location.href = "./calculo/calculo.html";
});


/* INGLES, ENTRAR A LA MATERIA */

document.getElementById('ingles').addEventListener('click', function () {
  window.location.href = "./ingles/ingles.html";
});


/* FISICA, ENTRAR A LA MATERIA */

document.getElementById('fisica1').addEventListener('click', function () {
  window.location.href = "./fisica/fisica.html";
});









/* ESTA PARTE ES DE LA LIBRERIA: https://app.embed.im/snow.js Como no se podia poner bien, se extrajo el codigo que venia del enlace */

/* 
var embedimSnow = document.getElementById("embedim--snow");

if (!embedimSnow) {
  function embRand(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  var embCSS = '.embedim-snow{position: absolute;width: 10px;height: 10px;background: white;border-radius: 50%;margin-top: -10px}';
  var embHTML = '';

  for (var i = 1; i < 200; i++) {
    embHTML += '<i class="embedim-snow"></i>';

    var rndX = (embRand(0, 1000000) * 0.0001);
    var rndO = embRand(-100000, 100000) * 0.0001;
    var rndT = (embRand(3, 8) * 10).toFixed(2);
    var rndS = (embRand(0, 10000) * 0.0001).toFixed(2);

    embCSS += '.embedim-snow:nth-child(' + i + '){' +
      'opacity:' + (embRand(1, 10000) * 0.0001).toFixed(2) + ';' +
      'transform:translate(' + rndX.toFixed(2) + 'vw,-10px) scale(' + rndS + ');' +
      'animation:fall-' + i + ' ' + embRand(10, 30) + 's -' + embRand(0, 30) + 's linear infinite' +
      '}' +
      '@keyframes fall-' + i + '{' +
      rndT + '%{' +
      'transform:translate(' + (rndX + rndO).toFixed(2) + 'vw,' + rndT + 'vh) scale(' + rndS + ')' +
      '}' +
      'to{' +
      'transform:translate(' + (rndX + (rndO / 2)).toFixed(2) + 'vw, 105vh) scale(' + rndS + ')' +
      '}' +
      '}';
  }

  embedimSnow = document.createElement('div');
  embedimSnow.id = 'embedim--snow';
  embedimSnow.innerHTML = '<style>#embedim--snow {position: fixed; left: 0; top: 0; bottom: 0; width: 100%; height: 100%; overflow: hidden; z-index: 1; pointer-events: none}' + embCSS + '</style>' + embHTML;

  var msjDiv = document.querySelector(".msj");
  msjDiv.appendChild(embedimSnow);
} */





