; (function(){
  'use strict'
  const arrow = document.querySelector('.icon-arrow');
  let animation = setInterval(function(){
    let delay = 300;
    arrow.classList.add('arrow-animation-step1');
    setTimeout(function(){
      arrow.classList.remove('arrow-animation-step1');
      arrow.classList.add('arrow-animation-step2');
    }, delay);
    setTimeout(function(){
      arrow.classList.remove('arrow-animation-step2');
      arrow.classList.add('arrow-animation-step3');
    }, delay*2);
    setTimeout(function(){
      arrow.classList.remove('arrow-animation-step3');
    }, delay*3);

  }, 3000);
})();
