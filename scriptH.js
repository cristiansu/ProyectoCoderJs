let prod = document.getElementById('productosLista')
let registradosP = document.getElementById('listaP')


registradosP.addEventListener('click', ()=>{
    let arrayStorage = JSON.parse(localStorage.getItem('Productos'))

    prod.innerHTML = ''


    arrayStorage.forEach((productoArray, indice) => {

        prod.innerHTML += `
        <div class="producto" id=producto${indice}>

            <div class="contenedor_producto">

                <img src="${productoArray.foto}" alt="imagen producto" id="display_img">
                <div class="detalle">
                    <h5>${productoArray.nombre}</h5>
                    <h2>${productoArray.marca}</h2>
                    <h2>${productoArray.modelo}</h2>
                    <h3>$${productoArray.precio}</h3>
                </div>

            </div>

        </div>
        `
        
    });

})