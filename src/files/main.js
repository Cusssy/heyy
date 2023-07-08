function menulist() {
  var enlacesContainer = document.getElementById("enlacesContainer");

  // Verificar si el contenedor de enlaces tiene contenido
  if (enlacesContainer.innerHTML !== "") {
      enlacesContainer.style.opacity = 0; // Establecer la opacidad en 0
      setTimeout(function() {
          enlacesContainer.innerHTML = ""; // Limpiar el contenido después de que la transición haya finalizado
      }, 300); // Ajusta la duración de la transición (en milisegundos) según tus necesidades
  } else {

      var enlaces = [
          { texto: "Twitter cutter", url: "https://cutter.cusssy.com" },
          { texto: "WordFinder", url: "https://wordfinder.cusssy.com" },
          { texto: "AntiGPT", url: "https://antigpt.cusssy.com" },

          // Agrega más enlaces según sea necesario
      ];

      enlaces.forEach(function(enlace) {
          var etiquetaA = document.createElement("a");
          etiquetaA.href = enlace.url;
          etiquetaA.textContent = enlace.texto;
          etiquetaA.id = "lista"; // Agregar esta línea para asignar la ID "lista"
          enlacesContainer.appendChild(etiquetaA);
          enlacesContainer.appendChild(document.createElement("br"));
      });

      // Aplicar una pequeña demora antes de establecer la opacidad en 1 para que la transición se active correctamente
      setTimeout(function() {
          enlacesContainer.style.opacity = 1;
      }, 10);
  }
}



var ElementosClick = [];
var contador = 0;
var audio = new Audio("src/effect.mp3");
var clickEnabled = true;

document.addEventListener("mousedown", captura_click);

function captura_click(e) {
  if (!clickEnabled) {
    return;
  }

  var HaHechoClick = e.target;

  if (
    HaHechoClick.tagName.toLowerCase() === "img" &&
    HaHechoClick.src.toLowerCase().endsWith(".gif")
  ) {
    ElementosClick.push(HaHechoClick);
    contador++;

    if (contador >= 15) {
      clickEnabled = false;
      audio.play();

      var overlay = document.createElement("div");
      overlay.classList.add("overlay");

      var image = document.createElement("img");
      image.src =
        "src/nerd.webp";
      image.classList.add("image");

      overlay.appendChild(image);
      document.body.appendChild(overlay);

      setTimeout(function () {
        overlay.classList.add("fadeout");
        setTimeout(function () {
          overlay.remove();
          clickEnabled = true;
        }, 2000);
      }, 10000);
    } else {
      console.log("Contador:", contador);
    }
  }
}

// Reiniciar el contador cada 5 segundos
setInterval(function () {
  contador = 0;
}, 5000);
