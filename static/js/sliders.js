$(document).ready(function(){
  
  var $window = $(window);

  function isLargeScreen(){
  	var windowsize = $window.width();
  	if(windowsize > 768){
  		return true;
  	}
  }
  var aboutGlide = new Glide('.about-glide',{
	type: 'carousel',
	perView: 3,
  dragThreshold: false,
  swipeThreshold: false,
  autoplay: false,
  //focusAt: 'center',
	breakpoints: {

		768: {
			perView: 1,
      dragThreshold: 120,
      swipeThreshold: 80,
			autoplay: 3000,
			animationDuration: 1000,
      animationTimingFunc: 'ease-in-out'
           
		}
	}
	
  }
  		
  );

  if(isLargeScreen()){
  	aboutGlide.disable();
  }
  aboutGlide.mount();

  new Glide('.glide-desktop-header', {
  	animationDuration: 1000,
  	animationTimingFunc: 'ease-in-out'
  }).mount();
});