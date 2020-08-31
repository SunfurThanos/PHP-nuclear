
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


function abrir_link(link) {
  window.open( link, "_blank" );
}
