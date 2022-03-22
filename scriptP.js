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

    
    // let foto = document.getElementById('idFoto').files[0].name
    let foto = document.getElementById('idFoto').value
    
    /*var uploaded_image;
    foto.addEventListener('change', function(){
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            uploaded_image = reader.result;
            document.getElementById('idFoto').style = `url(${uploaded_image})`
        });
        reader.readAsDataURL(this.files[0]);
    })*/

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
        <tr id="cliente${indice}">
        <td>${productoArray.nombre}</td>
        <td>${productoArray.marca}</td>
        <td>${productoArray.modelo}</td>
        <td>${productoArray.precio}</td>
        <td>${productoArray.foto}</td>
        <td><button class="btn btn-danger" id="btnEliminar${indice}">Eliminar</button></td>
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

    productos.forEach((productoArray, indice) => {
        document.getElementById(`btnEliminar${indice}`).addEventListener('click', () => {
            registrados.removeChild(document.getElementById(`cliente${indice}`))
            let indiceArray = productos.findIndex(producto => producto.nombre == productoArray.nombre)
            productos.splice(indiceArray,1)
            localStorage.setItem('Productos', JSON.stringify(productos))
        })
    })


})