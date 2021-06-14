var navbar= document.querySelector('.fa-bars');
var slidemenu= document.querySelector('.slide-menu')

// navbar.addEventListener('click',function(){
//     slidemenu.style.disply= 'block';
// })
navbar.addEventListener('click',function(){
    let value= slidemenu.classList.contains('slide-collapse')
 if(value){
     slidemenu.classList.remove('slide-collapse')

 }
 else{
     slidemenu.classList.add('slide-collapse')
 }
});