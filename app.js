//Para ocultar los DIVs
const index = document.getElementById('index');
index.style.display = 'none'

const terror = document.getElementById('terror');
terror.style.display = 'none'

const comedia = document.getElementById('comedia');
comedia.style.display = 'none'

const score = document.getElementById('score');
score.style.display = 'none'


//Para ver los resultados:
let respuestacorrecta1=new Array("b","a","d");
let respuestacorrecta2=new Array("a","b","c");


console.log(respuestacorrecta1);


//Funciones:
    function ingresar() {
      const index = document.getElementById('index');
      index.style.display = 'block'
      console.log("Hola",index);

      const home = document.getElementById('home');
      home.style.display = 'none'

      const valor = document.getElementById("name").value;
      document.getElementById("name1").innerHTML  = valor;

    }

    function tema1() {
      const terror = document.getElementById('terror');
      terror.style.display = 'block'
      console.log("Hola",terror);

      const index = document.getElementById('index');
      index.style.display = 'none'

    }

    function tema2() {
      const comedia = document.getElementById('comedia');
      comedia.style.display = 'block'
      console.log("Hola",comedia);

      const index = document.getElementById('index');
      index.style.display = 'none'

    }

    function volver() {
      const index = document.getElementById('index');
      index.style.display = 'block'
      console.log("Hola",index);

      const score = document.getElementById('score');
      score.style.display = 'none'

    }



    function comprobarRadio2(respuestacorrecta2){

      const score = document.getElementById('score');
      score.style.display = 'block'
      console.log("Hola",score);

      const comedia = document.getElementById('comedia');
      comedia.style.display = 'none'

			let numeroRespuestasOK=0;
			let numeroRespuestasKO=0;
			let solucion = document.getElementById("solucion");
			let tablaResultados ="<table border='1'>";

			for(j=0; j< respuestacorrecta2.length; j++){
			let radios = document.getElementsByName(j+1);
				for(i=0; i< radios.length;i++){
					if (radios[i].checked){
					let valor =  radios[i].value;

						if(valor == respuestacorrecta2[j]) {
						tablaResultados+= "<tr><td> Respuesta correcta: </td>"+ "<td>"+ valor + "</td></tr>";
						numeroRespuestasOK++;
						break;
						}else {
						tablaResultados+= "<tr><td> Respuesta incorrecta: </td><td>"+ valor + "</td></tr>";
						numeroRespuestasKO++;
						break;
						}
					}
				}


			}
			var numeroRespuestasNulas=respuestacorrecta2.length - (numeroRespuestasOK + numeroRespuestasKO);
			tablaResultados+="<tr><td><center>Resultado </center></td><td> Respuestas correctas: "+numeroRespuestasOK+"<br/>Respuestas incorrectas: "+ numeroRespuestasKO+"<br/>Respuestas en blanco: "+ numeroRespuestasNulas+"</td></tr></table>";
			solucion.innerHTML = tablaResultados;
	}

  function comprobarRadio1(respuestacorrecta1){

    const score = document.getElementById('score');
    score.style.display = 'block'
    console.log("Hola",score);

    const terror = document.getElementById('terror');
    terror.style.display = 'none'

    let numeroRespuestasOK=0;
    let numeroRespuestasKO=0;
    let solucion = document.getElementById("solucion");
    let tablaResultados ="<table border='1'>";

    for(j=0; j< respuestacorrecta1.length; j++){
    let radios = document.getElementsByName(j+1);
      for(i=0; i< radios.length;i++){
        if (radios[i].checked){
        let valor =  radios[i].value;

          if(valor == respuestacorrecta1[j]) {
          tablaResultados+= "<tr><td> Respuesta correcta: </td>"+ "<td>"+ valor + "</td></tr>";
          numeroRespuestasOK++;
          break;
          }else {
          tablaResultados+= "<tr><td> Respuesta incorrecta: </td><td>"+ valor + "</td></tr>";
          numeroRespuestasKO++;
          break;
          }
        }
      }


    }
    var numeroRespuestasNulas=respuestacorrecta1.length - (numeroRespuestasOK + numeroRespuestasKO);
    tablaResultados+="<tr><td><center>Resultado </center></td><td> Respuestas correctas: "+numeroRespuestasOK+"<br/>Respuestas incorrectas: "+ numeroRespuestasKO+"<br/>Respuestas en blanco: "+ numeroRespuestasNulas+"</td></tr></table>";
    solucion.innerHTML = tablaResultados;
}
