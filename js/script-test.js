window.addEventListener('DOMContentLoaded', () => {
 
    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
  
        if (callback) {
          callback(swiper);
        }
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
    const someFunc = (instance) => {
      if (instance) {
        instance.on('slideChange', function (e) {
          console.log('*** mySwiper.activeIndex', instance.activeIndex);
        });
      }
    };
  
    resizableSwiper(
      '(max-width: 1200px)',
      '.slider-1',
      {
        
        spaceBetween: 32,
        slidesPerView: 3,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        
      },
     
      someFunc
    );
    resizableSwiper(
      '(max-width: 800px)',
      '.slider-1',
      {
        spaceBetween: 32,
        slidesPerView: 2,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        
        
      },
      
      someFunc
    );
     resizableSwiper(
      '(max-width: 500px)',
      '.slider-1',
      {
        spaceBetween: 32,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        
      },
      someFunc
    );
     resizableSwiper(
      '(max-width: 1400px)',
      '.slider-2',
      { 
        spaceBetween: 15,
        slidesPerView: 3,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }, 
      },
      someFunc
    );
     resizableSwiper(
      '(max-width: 1200px)',
      '.slider-2',
      { 
        spaceBetween: 15,
        slidesPerView: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }, 
      },
      someFunc
    );
    resizableSwiper(
      '(max-width: 800px)',
      '.slider-2',
      { 
        spaceBetween: 15,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }, 
      },
      someFunc
    );
   
    
     
    
  });