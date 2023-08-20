 let  subtitulo=document.querySelector('.subtitulo')
 console.log(subtitulo);
 let a =document.querySelector('a')
 console.log(a);
 let p=document.querySelectorAll('p')
 console.log(p);

 let main=document.querySelector('main')
console.log(main);
let body= document.querySelector('body')

let nombreUsuario = prompt('ingrese su nombre')

if (nombreUsuario== '') {
    subtitulo.innerHTML += 'invitado'
}else{
    subtitulo.innerHTML += nombreUsuario
}

subtitulo.style.textTransform ='uppercase'

a.style.color='#E51B3E.'

let respuesta = confirm('desea colocar un fondo de pantala?')

if (respuesta) {
    
    body.classList.add('fondo')
}

for (let index = 0; index < p.length; index++) {
    const element = p[index];
    if (index % 2==0) {
element.classList.add('destacadoPar')
        
    }else{
        element.classList.add('destacadoImpar')
    }
}
main.style.display='block'