function atualizarDataHora() {
    var dataHora = new Date();
    var data = dataHora.toLocaleDateString();
    var hora = dataHora.toLocaleTimeString();
    document.getElementById("data-hora").innerHTML = data + " " + hora;
  }
  setInterval(atualizarDataHora, 1000);
  