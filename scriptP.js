let registro = document.getElementById('formProduct')
let listar = document.getElementById('lista')
let registrados = document.getElementById('productosR')
let card = document.getElementById('tarjeta')


class Producto {
    constructor(nombre, marca, modelo, precio, foto){
        this.nombre=nombre;
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
        this.foto=foto;
    }
}

let productos


if(localStorage.getItem('Productos')){
    productos = JSON.parse(localStorage.getItem('Productos'))
} else{
    productos = []
    localStorage.setItem('Productos', JSON.stringify(productos))
}

registro.addEventListener('submit', (e)=>{
    e.preventDefault()

    let nombre = document.getElementById('idNombre').value
    let marca = document.getElementById('idMarca').value
    let modelo = document.getElementById('idModelo').value
    let precio = document.getElementById('idPrecio').value
    let foto = document.getElementById('idFoto').files[0].name

    const producto = new Producto(nombre, marca, modelo, precio, foto)
    productos.push(producto)

    localStorage.setItem('Productos', JSON.stringify(productos))
    registro.reset()

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Registrado Exitosamente',
        showConfirmButton: false,
        timer: 1500
    })

})

listar.addEventListener('click', ()=>{
    let arrayStorage = JSON.parse(localStorage.getItem('Productos'))

    registrados.innerHTML = ''

    arrayStorage.forEach((productoArray, indice) => {

        registrados.innerHTML += `
        <tr id=cliente${indice}>
        <td>${productoArray.nombre}</td>
        <td>${productoArray.marca}</td>
        <td>${productoArray.modelo}</td>
        <td>${productoArray.precio}</td>
        <td>${productoArray.foto}</td>
        </tr>
        `
        
    });

    card.innerHTML = ''

    let contador = productos.length

    card.innerHTML = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Total Registrados</h5>
            <h3 style="text-align: center;">${contador}</h3>
        </div>
    </div>
    `

    


})