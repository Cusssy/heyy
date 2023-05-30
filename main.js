function menulist() {
    var enlacesContainer = document.getElementById("enlacesContainer");
    
    // Verificar si el contenedor de enlaces tiene contenido
    if (enlacesContainer.innerHTML !== "") {
        enlacesContainer.innerHTML = ""; // Limpiar el contenido si ya existe
    } else {
        var enlaces = [
            { texto: "Twitter cutter", url: "https://cutter.cusssy.com" },
            { texto: "WordFinder", url: "https://github.com/cusssy/WordFinder" },
            
            // Agrega más enlaces según sea necesario
        ];
    
        enlaces.forEach(function(enlace) {
            var etiquetaA = document.createElement("a");
            etiquetaA.href = enlace.url;
            etiquetaA.textContent = enlace.texto;
            enlacesContainer.appendChild(etiquetaA);
            enlacesContainer.appendChild(document.createElement("br"));
        });
    }
}

var ElementosClick = []; // Array vacío para almacenar los elementos clicados
var contador = 0; // Contador de clics

document.onclick = captura_click;

function captura_click(e) {
  var HaHechoClick;
  if (e == null) {
    HaHechoClick = event.srcElement;
  } else {
    HaHechoClick = e.target;
  }

  if (HaHechoClick.tagName.toLowerCase() === "img" && HaHechoClick.src.toLowerCase().endsWith(".gif")) {
    ElementosClick.push(HaHechoClick);
    contador++; // Incrementar el contador

    if (contador >= 15) {
      // Redirigir a Rick Roll
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      contador = 0; // Reiniciar el contador
    } else {
      console.log("Contador:", contador); // Imprimir el contador en la consola
    }
  }
}

// Reiniciar el contador cada 5 segundos
setInterval(function () {
  contador = 0;
}, 5000);
