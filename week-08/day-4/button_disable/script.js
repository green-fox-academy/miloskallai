let btnLoveCats = document.querySelector('.i-love-cats');
let btnSignUp = document.querySelector('.sign-up');
let catRadio = document.querySelector('.cat-radio');
let dogRadio = document.querySelector('.dog-radio');
let goldfishRadio = document.querySelector('.goldfish-radio');
let catYes = document.querySelector('.cat-yes');
let catNo = document.querySelector('.cat-no');

btnLoveCats.disabled = true;
btnSignUp.disabled = true;

catRadio.addEventListener('click', ()=>{
  if(catRadio.checked === true){
    btnSignUp.disabled = false;
  }
});

dogRadio.addEventListener('click', ()=>{
  if(dogRadio.checked === true){
    btnSignUp.disabled = false;
  }
})

goldfishRadio.addEventListener('click', ()=>{
  if(goldfishRadio.checked === true){
    btnSignUp.disabled = false;
    btnLoveCats.disabled = true;
  }
})

catYes.addEventListener('click', ()=>{
  if(catYes.checked === true){
    btnLoveCats.disabled = false;
  }
})

catNo.addEventListener('click', ()=>{
  if(catNo.checked === true){
    btnLoveCats.disabled = true;
  }
})

btnLoveCats.addEventListener('click', ()=>{
  if(catYes.checked === true){
    alert(`Thank you, you've successfully signed up for cat facts`);
  } 
});

btnSignUp.addEventListener('click', ()=>{
  if(catYes.checked === false && goldfishRadio.checked === true){
    alert(`Sigh, we still added you to the cat facts list`);
  }
});


