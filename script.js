function moverBoton() {
    var botonNo = document.getElementById("btn-no");
    var x = Math.floor(Math.random() * 300) - 150;
    var y = Math.floor(Math.random() * 300) - 150;
    botonNo.style.transform = `translate(${x}px, ${y}px)`;
}

function mostrarMensaje() {
    var mensaje = document.getElementById("mensaje");
    var spiderman = document.getElementById("spiderman");
    var nuevoGif = document.getElementById("nuevo-gif");

    // Mostrar mensaje
    mensaje.textContent = "¡Sabía que dirías que sí, te amuuu! ❤️ ";

    // Ocultar el GIF de Spiderman y mostrar el nuevo GIF
    spiderman.style.display = "none";
    nuevoGif.style.display = "block";
}
