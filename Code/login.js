const login = document.getElementById('login');
const modal = document.getElementById('loginModal');
const materias = document.getElementById('ocultar-materias');
const cancekar = document.getElementById('cancekar');
const register = document.getElementById('register');
const efectosDeColores = document.getElementById('efectos5');

function inicio() {
    modal.style.display = 'block';
}

function iniciarSesion() {
    // Aquí puedes agregar la lógica para iniciar sesión

    register.style.display = "block";
    materias.style.display = 'none';
    modal.style.display = 'none';
    efectosDeColores.style.display = 'none';
}

function cancelar() {
    register.style.display = "none";
    efectosDeColores.style.display = 'block';
    materias.style.display = 'block';
    modal.style.display = 'none';
}






