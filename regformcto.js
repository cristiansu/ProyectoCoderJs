let listar = document.getElementById('listaCSR')
let registrados = document.getElementById('CSR')
let card = document.getElementById('tarjeta')


listar.addEventListener('click', ()=>{
    let arrayStorage = JSON.parse(localStorage.getItem('Consultas'))

    registrados.innerHTML = ''

    arrayStorage.forEach((contactoArray, indice) => {

        registrados.innerHTML += `
        <tr id=cliente${indice}>
        <td>${contactoArray.nombre}</td>
        <td>${contactoArray.email}</td>
        <td>${contactoArray.telefono}</td>
        <td>${contactoArray.tipoconsulta}</td>
        <td>${contactoArray.mensaje}</td>
        </tr>
        `
        
    });

    card.innerHTML = ''

    let contador = consultas.length

    card.innerHTML = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Total Registrados</h5>
            <h3 style="text-align: center;">${contador}</h3>
        </div>
    </div>
    `

    


})