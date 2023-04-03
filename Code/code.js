

document.getElementById('calculo').addEventListener('click', calculo);
document.getElementById('fisica').addEventListener('click', fisica);




function calculo(event){
    event.preventDefault();

    swal({
        title: "Aviso!",
        text: "Lo siento, la página que está intentando acceder no se encuentra disponible en este momento. Estamos trabajando en la construcción de esta página web. Por favor, tenga paciencia mientras la finalizamos. Si cree que esto es un error, por favor contáctenos. El código de error correspondiente es el HTTP 404 (Not Found).",
        icon: "info",
        buttons: true,
        dangerMode: true
      });
      


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



}


function fisica(event){
    event.preventDefault()

    swal({
        title: "Aviso!",
        text: "Lo siento, la página que está intentando acceder no se encuentra disponible en este momento. Estamos trabajando en la construcción de esta página web. Por favor, tenga paciencia mientras la finalizamos. Si cree que esto es un error, por favor contáctenos. El código de error correspondiente es el HTTP 404 (Not Found).",
        icon: "info",
        buttons: true,
        dangerMode: true
      });
      
}

const footer = document.getElementById("footer");

// Obtener el botón de cambio de tema
const toggleThemeButton = document.getElementById("toggle-theme");

// Añadir un event listener al botón
toggleThemeButton.addEventListener("click", function() {
  // Cambiar la clase del body para activar el modo oscuro
  document.body.classList.toggle("dark-mode");
  
  // Cambiar el texto del botón
  if (document.body.classList.contains("dark-mode")) {
    toggleThemeButton.textContent = "Cambiar a Modo Claro";
  } else {
    toggleThemeButton.textContent = "Cambiar a Modo Oscuro";
    footer.style.background = "rgb(66, 66, 77)";
  }
});









const colorButton = document.getElementById("color-button");
const fisicaButton = document.getElementById("fisica-button");
const ecologia = document.getElementById("ecologia");
const calculo1 = document.getElementById("calculo1");
const ingles = document.getElementById("ingles");
const fisica1 = document.getElementById("fisica1");


colorButton.addEventListener("click", function() {
  document.body.classList.toggle("color-off");
  document.body.classList.toggle("colors");

  if (document.body.classList.contains("color-off")) {
    colorButton.textContent = "Colores: Apagados";
    colorButton.style.background = "#808080";
    colorButton.style.color = "#fff";
    /* ecologia.style.background = "rgba(128, 128, 128, 0.689)"; */

    // Agregar regla de CSS para hover en "ecologia" cuando el botón esté en modo "off"

    ecologia.addEventListener("mouseover", function() {
      this.style.background = "rgba(128, 128, 128, 0.689)";
      this.style.color = "#000000";
    });
    ecologia.addEventListener("mouseout", function() {
      this.style.background = "";
    });

    /* Cambiar en calculo */
    
    calculo1.addEventListener("mouseover", function() {
      this.style.background = "rgba(128, 128, 128, 0.689)";
      this.style.color = "#000000";
    });
    calculo1.addEventListener("mouseout", function() {
      this.style.background = "";
    });

    
    /* Cambiar en ingles */

    ingles.addEventListener("mouseover", function() {
        this.style.background = "rgba(128, 128, 128, 0.689)";
        this.style.color = "#000000";
      });
    ingles.addEventListener("mouseout", function() {
        this.style.background = "";
      });


      /* Cambiar en fisica */


    fisica1.addEventListener("mouseover", function() {
        this.style.background = "rgba(128, 128, 128, 0.689)";
        this.style.color = "#000000";
      });
    fisica1.addEventListener("mouseout", function() {
        this.style.background = "";
      });


  } else {
    colorButton.textContent = "Colores: Activos";
    colorButton.style.background = "linear-gradient(250deg, #33cc33, rgba(0, 208, 255, 0.712), #ffcc00, #cc33ff, #ff3366)";
    colorButton.style.color = "#fff";
    

    // Agregar regla de CSS para hover en "ecologia" cuando el botón esté en modo "on"

    ecologia.addEventListener("mouseover", function() {
      this.style.background = "linear-gradient(250deg, #33cc33, rgba(0, 208, 255, 0.712) )";
      this.style.color = "#000000";
    });
    ecologia.addEventListener("mouseout", function() {
      this.style.background = "";
      this.style.color = "";
    });

    /* cambiar el color del hover en calculo */

    calculo1.addEventListener("mouseover", function() {
      this.style.background = "linear-gradient(250deg, red, blue)";
      this.style.color = "#000000";
    });
    calculo1.addEventListener("mouseout", function() {
      this.style.background = "";
      this.style.color = "";
    });

    /* Cambiar el color del hober en ingles */

    ingles.addEventListener("mouseover", function() {
        this.style.background = "linear-gradient(360deg, white, red, white, red, white, red, white, red, white, blue, white, blue, white)";
        this.style.color = "#000000";
      });
    ingles.addEventListener("mouseout", function() {
        this.style.background = "";
        this.style.color = "";
      });


      /* Cambiar colores en el hover en fisica */

    fisica1.addEventListener("mouseover", function() {
        this.style.background = "linear-gradient(300deg, red, green, blue, orangered, red, green, blue, orange)";
        this.style.color = "#000000";
      });
    fisica1.addEventListener("mouseout", function() {
        this.style.background = "";
        this.style.color = "";
      });

  }
});




