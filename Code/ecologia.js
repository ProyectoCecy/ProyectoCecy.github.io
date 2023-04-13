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



// Obtener los elementos del DOM
const sidebar = document.querySelector('.sidebar');
const toggleSidebarButton = document.getElementById('toggle-sidebar');
const topicsList = document.querySelector('.topics-list');
const mainContent = document.querySelector('.main-content');
const espacioBlanco = document.querySelector('.espacio-blanco');


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
  }




  // Oculta el div con la clase "espacio-blanco"
  espacioBlanco.style.display = 'none';
}




function showTopicContent(topicId) {
  // Oculta todos los contenidos de temas antes de mostrar el contenido correspondiente
  const topicContents = document.getElementsByClassName('topic-content');
  for (let i = 0; i < topicContents.length; i++) {

    topicContents[i].style.display = 'none';

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


