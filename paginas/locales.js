let divLocales = document.getElementById('divLocales')

fetch('locales.json')
.then(promesa => promesa.json())
.then(data => {
    data.forEach((local, indice) => {
        divLocales.innerHTML += `

        <div class="producto" id=local${indice}>

            <div class="contenedor_producto">

                <img src="${local.foto}" alt="imagen producto" id="display_img">
                <div class="detalle">
                    <h5>Local: ${local.local}</h5>
                    <h4>Dirección: ${local.direccion}</h4>
                    <h6>Jefe(a) Local: ${local.jefe}</h6>
                    <h8>Telefono: ${local.telefono}</h8>
                </div>

            </div>

        </div>

        `
        
    });
})