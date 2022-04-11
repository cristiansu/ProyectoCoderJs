let divIndicadores = document.getElementById('divIndicadores')

document.querySelector('#dolar').addEventListener('click', function () {
    obtenerDatos('dolar');
});


document.querySelector('#uf').addEventListener('click', function () {
    obtenerDatos('uf');
});


function obtenerDatos(indicador) {

    let url = `https://mindicador.cl/api/${indicador}`;

    fetch(url)
        .then(promesa => promesa.json())
        .then(data => {
            let j = 0
            const fecha = [];
            const valor = [];
            divIndicadores.innerHTML = '';
            for (let i of data.serie) {
                j++;
                divIndicadores.innerHTML += `<li> ${indicador} | ${i.fecha.substr(0, 10)} |$ ${i.valor}</li>` //función substr permite cortar un string estrayendo lo necesario
                fecha.push(i.fecha.substr(0, 10))
                valor.push(i.valor)

                if (j > 15) {
                    break;
                }
            }




             /*barra*/
            
            const fechaI = fecha.reverse()
            const valorI = valor.reverse()
            
            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
            type: 'line',
            data: {
            /*labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],*/
            labels: fecha,
            datasets: [{
                label: indicador,
                /*data: [12, 19, 3, 5, 2, 3],*/
                data: valorI,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
            },
            options: {
                scales: {
                y: {
                    beginAtZero: false
                }
                }
            }
            });

            

            
        })

   

}

