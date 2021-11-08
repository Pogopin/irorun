
let list = document.querySelectorAll('.header__list-link');
list[0].classList.add('header__list-link--active');

list.forEach((el,i) => {
    
    el.addEventListener('mouseenter', (event)=> {

        list[0].classList.remove('header__list-link--active');
        if(el.classList.contains('header__list-link--active')) {
            el.classList.remove('header__list-link--active');
        }
        else {
            event.target.classList.add('header__list-link--active');
        }
    });
});

list.forEach(el => {
    el.addEventListener('mouseout', (event)=> {
        
        if(el.classList.contains('header__list-link--active')) {
            el.classList.remove('header__list-link--active');
            
        }
    });
});


