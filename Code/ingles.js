/* const music = document.getElementById('audio');
const button = document.getElementById('music');

function detener(){
    if (music.paused) {
        music.play()
        button.value = "Detener la música";
    } else {
        music.pause()
        button.value = "Reproducir la música";
    }
};
 */

const body = document.querySelector('body');
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    body.style.height = '130vh';
  } else {
    body.style.height = '100vh';
  }
});


/* EFECTO DE ESCRIBIR PERO PARA QUE SE VEA EL TITULO EN ESCRITURA */

var tit = document.title;
var c = 0;

function writetitle() {
  document.title = tit.substring(0, c);
  if (c == tit.length) {
    c = 0;
    setTimeout(writetitle, 1000);
  } else {
    c++;
    setTimeout(writetitle, 200);
  }
}

writetitle();


/* EFECTO DONDE SE VE COMO SE CREA EL EFECTO DE IR ESCRIBIENDO EN LA PAGINA WEB DE QUIEN HIZO LA PAGINA */


var texto = document.getElementById("nombre-texto").textContent;
var v = 0;

function escribirTexto() {
  document.getElementById("nombre-texto").textContent = texto.substring(0, v);

  if (v == texto.length) {

    console.log("El texto ha llegado a su fin")
    return
  } else {
    v++;
    setTimeout(escribirTexto, 100);
  }

}

escribirTexto();

/* SIRVE PARA QUE HAGA EL EFECTO DE LA TACHE CUANDO SE LE DA CLICK */

document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}



// Obtener los elementos del DOM
const sidebar = document.querySelector('.sidebar');
const toggleSidebarButton = document.getElementById('toggle-sidebar');
const topicsList = document.querySelector('.topics-list');
const mainContent = document.querySelector('.main-content');
const espacioBlanco = document.querySelector('.espacio-blanco');
const titulosDelParcial = document.querySelector('.title-partial');


// Añadir el evento click al botón para mostrar/ocultar el sidebar
toggleSidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  
});





function toggleTopics() {
  var topicsList = document.getElementById("topicsList");
  topicsList.classList.toggle("show");
  espacioBlanco.classList.toggle("show");

  // Pausa todos los videos
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    if (!video.paused) {
      video.pause();
    }
  });




  // Oculta el contenido del tema correspondiente cuando se oculta el sidebar
  const topicContents = document.getElementsByClassName('topic-content');
  for (let i = 0; i < topicContents.length; i++) {
    topicContents[i].style.display = 'none';
    /* Oculta el titulo cuando se escoje un tema */
    titulosDelParcial.style.display = 'none';
  }




  // Oculta el div con la clase "espacio-blanco"
  espacioBlanco.style.display = 'none';
  // Cuando este oculto el "espacio-blanco". Con el block se mostrara el titulo de primer parcial
  titulosDelParcial.style.display = 'block';
}




function showTopicContent(topicId) {
  // Oculta todos los contenidos de temas antes de mostrar el contenido correspondiente
  const topicContents = document.getElementsByClassName('topic-content');
  for (let i = 0; i < topicContents.length; i++) {

    /* Oculta el contenido cuando se pasa en temas diferentes*/
    topicContents[i].style.display = 'none';
    /* Oculta el contenido cuando se pasa en temas diferentes, este caso es el titulo */
    titulosDelParcial.style.display = 'none';
  }





  // Muestra el contenido del tema correspondiente
  const topicContent = document.getElementById(topicId);
  topicContent.style.display = 'block';
  
  // Pausa todos los videos
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    if (!video.paused) {
      video.pause();
    }
  });


  


  // Muestra el div con la clase "espacio-blanco"
  espacioBlanco.style.display = 'block';
}


