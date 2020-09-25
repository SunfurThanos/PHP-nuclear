
// copiar dirección de correo
function copy_mail() {
  texto   = "hormigence123@gmail.com"
  mensaje = "Dirección de correo copiado al portapapeles..."
  return COPY_portapapeles(texto, mensaje, 3000)
}

// copiar datos bancarios para la remesa
function copy_bank() {
  texto = "Nombres y apellidos:\nAndrade Felipe Echarry Montes\n\nCedula de identidad:\n25.969.358\n\nNumero de cuenta bancaria:\n01020128400101305258\n\nTipo de cuenta bancaria:\nAhorro\n\nUnidad bancaria:\nBanco de venezuela"
  mensaje = "Datos copiados al portapapeles..."
  return COPY_portapapeles(texto, mensaje, 2000)
}

// funcion generica de copiado al portapapeles
function COPY_portapapeles(texto, mensaje, time) {
  canvas = document.getElementById("mesge-tooltip")
  document.getElementById("MesageCopy-text").innerText = mensaje
  canvas.className = "MesageCopy"

	var copy = function (e) {
	    e.preventDefault();
      canvas.style.display = "block";

      setTimeout(function() {
        canvas.className = "MesageCopy_hide"
      }, time)

      if (e.clipboardData) {
          e.clipboardData.setData('text/plain', texto);
      } else if (window.clipboardData) {
          window.clipboardData.setData('Text', texto);
      }
  }
  window.addEventListener('copy', copy);
  document.execCommand('copy');
  window.removeEventListener('copy', copy);
}


// boton de subir arriba
function $ScrollToStart() {
  var $box = document.getElementById("inicio_page");
  $box.scrollIntoView({behavior: "smooth"});
};


// get pos=>barra de scroll
function medirScroll() {
	if (!window.scrollMaxY) {
    	return Math.min( (window.scrollY * 100 / (document.body.scrollHeight/1.1) ), 100 );
	} else {
		return Math.min( (window.scrollY * 100 / window.scrollMaxY ), 100 );
	};
};



function HIDE_MENU() {
  window.clearTimeout(func_show_menu);
  document.getElementById("inicio_scroll").className = "normal_menu";

}

var func_show_menu = false

function SHOW_MENU() {

  if (document.getElementById("inicio_scroll").className == "float_menu") {
    return HIDE_MENU()
  }

  function relampago() {
    document.getElementById("inicio_scroll").className = "float_menu";
  }

  document.getElementById("inicio_scroll").style.transform = "translateY(0px)"
  document.getElementById("inicio_scroll").style.display = "block"
  func_show_menu = setTimeout(relampago, 320)
}

document.addEventListener("scroll", ev => {
  HIDE_MENU()
});

document.addEventListener("keydown", event => {

  if (event.key=="Escape") {
    if (document.getElementById("inicio_scroll").className == "float_menu") {
      HIDE_MENU()
    }
  }

});

function funcion_espacial() {
    medition_scroll = medirScroll();

    // barra de scroll=>left*
    if (medition_scroll < 7) {
      document.getElementById("button_menu").style.display = "none";
      HIDE_MENU()
    } else {
      document.getElementById("button_menu").style.display = "block";
    };

    document.getElementById("banner_fixed1").style.height = medition_scroll.toString() + "%";
    setTimeout(funcion_espacial, 100);
};

setTimeout(funcion_espacial, 100);


function abrir_link(link, boot) {
  if (boot) {
    document.location = link;
  } else {
    window.open( link, "_blank" );
  }
}
