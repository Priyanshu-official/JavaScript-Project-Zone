const cards = document.querySelectorAll(".card");

var isfliped = false
var firstCard, secondCard;

cards.forEach((card) => card.addEventListener("click", flip))

function flip() {
    this.classList.add("flip")
    if(!isfliped){
      isfliped = true;
      firstCard = this;
    }else{
      secondCard = this;
      matchCard();
    }
};

function matchCard() {
  if(firstCard.dataset.image === secondCard.dataset.image){
    success();
  }else{
    fail();
  }
}

function success(){
  firstCard.removeEventListener("click", flip)
  secondCard.removeEventListener("click", flip)
  reset();
}

function fail(){
  setTimeout(() => {
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    reset();
  }, 500)
}

function reset(){
  isfliped =false;
  firstCard = null;
  secondCard = null;
}

function shuffle(){
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16)
    card.style.order = index;
  })
}

function showCard(){
  cards.forEach((card) => {
    card.classList.add("flip");
    setTimeout(() => card.classList.remove("flip"),1500 )
  })
}

window.addEventListener("load", shuffle);
window.addEventListener("load", showCard);