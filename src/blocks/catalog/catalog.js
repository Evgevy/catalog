document.addEventListener('DOMContentLoaded', () => {

    let myBtns=document.querySelectorAll('.catalog__link-page');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('catalog__link-page--active'));
          btn.classList.add('catalog__link-page--active');
        });
 
    });

});