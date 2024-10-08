
function verifica_hora() {
    const data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();

    var horario = window.document.getElementById('horas');
    var img = window.document.getElementById('foto');
    horario.innerHTML = `Agora são: <b>${hora}h${min}<b>`; 
    if (hora >= 18 || hora <= 5) {
        //Boa madrugada
        img.src = 'moon.png';
    } else if (hora >= 6 && hora <= 8){
        //Bom dia
        img.src = 'sunrise.png';
    } else if (hora > 8 && hora <= 16){
        //Bom Dia
        img.src = 'sun.png';
    } else if (hora > 16 || hora < 18){
        //Bom Dia
        img.src = 'entardecer.png';
    }
}

  
