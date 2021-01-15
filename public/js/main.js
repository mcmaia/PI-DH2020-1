let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseover',function(){
    this.classList.add('grow');
    this.classList.remove('shrink');
  })

  cards[i].addEventListener('mouseout',function(){
    this.classList.remove('grow');
    this.classList.add('shrink');
  })
}

let logo = document.querySelector('.logo');
 logo.addEventListener('mouseover', function(){
   logo.style.transform = 'rotate(180deg)'
 });

 logo.addEventListener('mouseout', function(){
  logo.style.transform = 'rotate(0deg)'
})