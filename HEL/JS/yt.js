// const items = document.querySelectorAll('iframe')
// const nbSlide = items.length
// const suivant = document.queryCommandIndeterm('.right')
// const precedent = document.querySelector('.left')
// let count = 0 

// function slideSuivante(){
    
//     items[count].classList.remove('active');
//     if (count < nbSlide - 1) {
//         count++;
//     } else {
//         count = 0;
//     }
//     items[count].classList.add('active')

// };
// suivant.addEventListener('click', slideSuivante)




const items = document.querySelectorAll('iframe');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)