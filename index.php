<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">

<link href="images/consola.png" rel="icon" type="image/x-icon">
<title>Heroku poverfull</title>

<link rel="stylesheet" href="spectre.min.css">
<link rel="stylesheet" href="spectre-exp.min.css">
<link rel="stylesheet" href="spectre-icons.min.css">


<div align="center">
    <br>
	<h3>Made in PHP, Python, Spectre & Heroku</h2>
	<img src="images/image05.jpeg" width="150">
	<br><br>
	<textarea placeholder="escribe texto a imprimir" style="width: 300px;height: 200px;padding-left: 0.4em;" id="IDE"></textarea>
	<br><br>
	<button class="btn btn-primary" id="BOTON" onclick="SEND_server_java()">Procesar</button>
	<br><br>
	<textarea id="DEBUG" style="pointer-events: none;border: none;outline: none;resize: none;width: 300px;height: 200px;"></textarea>
</div>


<script type="text/javascript">

editor = document.getElementById("IDE")
boton = document.getElementById("BOTON")
debug = document.getElementById("DEBUG")


function httpRequest(url, callback) {
    var http = new XMLHttpRequest();
    http.open('GET', url);
    http.send();

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            callback.apply(http);
        }
    }
}


function SEND_server_java() {

    if (editor.value=="") {
        return editor.focus()
    }

    valor = editor.value
    debug.value = ""
    boton.className = "btn loading"
    editor.value = ""

    httpRequest('client.php?chat-sample=' + valor, function() {
        var arreglo = JSON.parse(this.responseText);
        debug.value = arreglo
        boton.className = "btn btn-primary"
        editor.focus()
    });
}

</script>