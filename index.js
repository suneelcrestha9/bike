const burger = document.querySelector('.burger');
const navlinks = document.querySelector('.navlinks');
const helmet =document.querySelector('.helmet-page-one')

burger.addEventListener('click', show);

function show(){
    if (navlinks.style.display==='flex'){
        navlinks.style.display='none';
        helmet.style.display='block';
    }else{
        navlinks.style.display='flex';
        helmet.style.display='none';
    }
}

