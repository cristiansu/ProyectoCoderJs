let contacto = document.getElementById('formulario_contacto')



class Contacto {
    constructor(nombre, email, telefono, tipoconsulta, mensaje){
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
        this.tipoconsulta=tipoconsulta;
        this.mensaje=mensaje;
    }
}

let consultas


if(localStorage.getItem('Consultas')){
    consultas = JSON.parse(localStorage.getItem('Consultas'))
} else{
    consultas = []
    localStorage.setItem('Consultas', JSON.stringify(consultas))
}

contacto.addEventListener('submit', (e)=>{
    e.preventDefault()

    let nombre = document.getElementById('nombre').value
    let email = document.getElementById('email').value
    let telefono = document.getElementById('telefono').value
    let tipoconsulta = document.getElementById('tipoconsulta').value
    let mensaje = document.getElementById('mensaje').value
    

    const consulta = new Contacto(nombre, email, telefono, tipoconsulta, mensaje)
    consultas.push(consulta)

    localStorage.setItem('Consultas', JSON.stringify(consultas))
    contacto.reset()

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Mensaje Enviado Exitosamente',
        showConfirmButton: false,
        timer: 1500
    })

})