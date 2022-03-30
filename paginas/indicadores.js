let divIndicadores = document.getElementById('divIndicadores')

document.querySelector('#dolar').addEventListener('click', function(){
    obtenerDatos('dolar');
});


document.querySelector('#uf').addEventListener('click', function(){
    obtenerDatos('uf');
});


function obtenerDatos(indicador) {
    
    let url = `https://mindicador.cl/api/${indicador}`;

    fetch(url)
    .then(promesa => promesa.json())
    .then(data => {
        let j=0
        divIndicadores.innerHTML = '';
        for (let i of data.serie){
            j++;
            divIndicadores.innerHTML += `<li> ${indicador} | ${i.fecha.substr(0,10)} |$ ${i.valor}</li>` //función substr permite cortar un string estrayendo lo necesario
            
            if(j>15){
                break;
            }
        }



    })

}

