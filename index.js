let button = document.getElementById('cambiarColor');
let esNegro = false;

// button.addEventListener("click", function(){
//     if(esNegro === true){
//         document.body.style.background = 'white';
//         document.body.style.color = 'black';
//         button.innerHTML = 'cambiar a negro'
//         esNegro = false

//     } else {
//         document.body.style.background = 'black';
//         document.body.style.color = '#ccc';
//         button.innerHTML = 'soy negro, pasame a blanco';
//         esNegro = true;
//         // NO TIENE UNA FUNCION UTIL, SOLO TE AVISA QUE ESTAS CAMBIANDO
//         // alert("ESTAS CAMBIANDO A COLOR HUMILDE RESCATATEEE!")
//     }
// });
// me gustaria poner un buen boton y terminar de modificar los colores


//vamos de cero
button.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');
    if(esNegro) {
        button.classList.remove('fa-toggle-on');
        button.classList.add('fa-toggle-off');
        esNegro = false
    } else {
        button.classList.remove('fa-toggle-off');
        button.classList.add('fa-toggle-on');
        esNegro = true;
    }
}); 