function iniciar(){


document.getElementById('btnContar').addEventListener('click',function(){
    var lista=document.getElementById('listaElementos')
    var num=lista.childNodes.length;


    //div
let box=document.getElementById('box')
   box.style.background='pink'
   box.style.heigh='100px'
   box.style.width='200px'
   box.innerHTML=num

})

document.getElementById('btnAdd').addEventListener('click',function(){
 var lista=document.getElementById('listaElementos')
 var texto=document.getElementById('fnovo')

var li=document.createElement('li')

li.textContent=texto.value
lista.insertBefore(li,lista.childNodes[1])
texto.value=''
texto.focus()







})



}

window.addEventListener('load',iniciar)