$(function(){

$('.products__slider').slick({
prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
  infinite: false,
});

$('.questions__item-title').on('click', function(){
   $('.questions__item').removeClass('questions__item--active');
 $(this).parent().addClass('questions__item--active'); 
});
  
});

const scrolling = (upSelector = "") => {
  //     const upElem = document.querySelector(upSelector);

  //     window.addEventListener('scroll', () => {
  //         if (document.documentElement.scrollTop > 1200) {
  //             upElem.style.opacity = 1;
  //         } else {
  //             upElem.style.opacity = 0;
  //         }
  //     });

  let links = document.querySelectorAll('[href^="#"]');
  let speed = 0.4;

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      let witdhTop = document.documentElement.scrollTop;
      let hash = this.hash;
      let toBlock = document.querySelector(hash).getBoundingClientRect().top;
      let start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start;
        let r = (toBlock < 0 ? Math.max(witdhTop - progress / speed, witdhTop + toBlock) : Math.min(witdhTop + progress / speed, witdhTop + toBlock));

        document.documentElement.scrollTo(0, r);

        if (r != witdhTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      };
    });
  });

};

scrolling();
