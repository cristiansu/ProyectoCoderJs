let registro = document.getElementById('formUser')
let listar = document.getElementById('lista')
let registrados = document.getElementById('clientesR')
let card = document.getElementById('tarjeta')


class Cliente {
    constructor(nombre, apellido, email, telefono){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.telefono=telefono;
    }
}

let clientes


if(localStorage.getItem('Clientes')){
    clientes = JSON.parse(localStorage.getItem('Clientes'))
} else{
    clientes = []
    localStorage.setItem('Clientes', JSON.stringify(clientes))
}

registro.addEventListener('submit', (e)=>{
    e.preventDefault()

    let nombre = document.getElementById('idNombre').value
    let apellido = document.getElementById('idApellido').value
    let email = document.getElementById('idEmail').value
    let telefono = document.getElementById('idTelefono').value

    const cliente = new Cliente(nombre, apellido, email, telefono)
    clientes.push(cliente)

    localStorage.setItem('Clientes', JSON.stringify(clientes))
    registro.reset()

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Cliente Registrado Exitosamente',
        showConfirmButton: false,
        timer: 1500
    })

})

listar.addEventListener('click', ()=>{
    let arrayStorage = JSON.parse(localStorage.getItem('Clientes'))

    registrados.innerHTML = ''

    arrayStorage.forEach((clienteArray, indice) => {

        registrados.innerHTML += `
        <tr id=cliente${indice}>
        <td>${clienteArray.nombre}</td>
        <td>${clienteArray.apellido}</td>
        <td>${clienteArray.email}</td>
        <td>${clienteArray.telefono}</td>
        </tr>
        `
        
    });

    card.innerHTML = ''

    let contador = clientes.length

    card.innerHTML = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Total Registrados</h5>
            <h3 style="text-align: center;">${contador}</h3>
        </div>
    </div>
    `

    


})