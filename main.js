const d = document;
const w = window;

const nav = d.querySelector('.navbar');
const menu = d.getElementById('menu-btn');

const cartContainer = d.querySelector('.cart-items-container');
const cartIcon = d.getElementById('cart-btn');

const searchForm = d.querySelector('.search-form');
const searchBtn = d.getElementById('search-btn');

const body = d.getElementById('body');


menu.addEventListener('click', e =>{

    
    nav.classList.toggle('active');
    cartContainer.classList.remove('active');
    searchForm.classList.remove('active');
    
    
});

cartIcon.addEventListener('click', e =>{
    

    cartContainer.classList.toggle('active');
    nav.classList.remove('active');
    searchForm.classList.remove('active');
})


searchBtn.addEventListener('click', e =>{


    searchForm.classList.toggle('active');
    nav.classList.remove('active');
    cartContainer.classList.remove('active');
 
});


w.addEventListener('scroll', e => {


    nav.classList.remove('active');
    cartContainer.classList.remove('active');
    searchForm.classList.remove('active');
});

