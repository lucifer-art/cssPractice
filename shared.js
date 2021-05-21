var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var selectNegative = document.querySelector('.modal__actions button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNavBar = document.querySelector('.mobile-nav');

for (var i=0;i < selectPlanButton.length;i++){
    selectPlanButton[i].addEventListener('click',function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}
backdrop.addEventListener('click',function(){
    mobileNavBar.classList.remove('open');
    closeModal();
})

if(selectNegative) {
    selectNegative.addEventListener('click',closeModal);
}

function closeModal(){
    if(modal){
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click',function(){
    mobileNavBar.classList.add('open');
    backdrop.classList.add('open');
})

