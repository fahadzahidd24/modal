let button = document.querySelector('.btn')
let section2 = document.querySelector('.section2');
let cross = document.querySelector('.btn2')

button.addEventListener('click',()=>{
    section2.classList.toggle('section2Display')
})
cross.addEventListener('click',()=>{
    section2.classList.toggle('section2Display')
})