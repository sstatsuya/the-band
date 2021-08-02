const modal = document.querySelector('.js-modal');
const buyBtns = document.querySelectorAll('.js-btn-buy');
const closeBtn = document.querySelector('.js-icon-close');
const modalContainer = document.querySelector('.js-modal-container');

//Hien thi modal buy ticket
function showBuyTicket(){
    modal.classList.add('open-modal');
}

//Dong modal buy ticket
function hideBuyTicket(){
    modal.classList.remove('open-modal');
}


//Lang nghe su kien click nut mua ve
for(buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTicket);
}

//Lang nghe su kien click nut dong modal mua ve
closeBtn.addEventListener('click', hideBuyTicket);

//Lang nghe su kien click vao modal thi se dong
modal.addEventListener('click', hideBuyTicket);
//Ngan chan dong modal khi click vao ben trong modal container
modalContainer.addEventListener('click', (event)=>{
    event.stopPropagation();
})