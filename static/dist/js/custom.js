
window.onload = function() {
  var logo = document.getElementById("closeSmallMenu");
  var mainNavSm = document.getElementById("mainNavSm");
  

  logo.onclick = function(){
  	TweenLite.to(mainNavSm, 1, {x:"542px", opacity: 0});
  }
}

// var panel1 = new TimelineLite();
// panel1.from(...);
//   ...

// var panel2 = new TimelineLite();
// panel2.from(...);
//   ...

// var panel3 = new TimelineLite();
// panel3.from(...);
//   ...
function toggleElementWithId(id){
	$("#"+id).slideToggle('slow');
}

function toggleElementWithClass(className){
	$("."+className).slideToggle('slow');
}

function openWithId(id){
	$("#"+id).slideDown("slow");
}

function closeWithId(id){
	$("#"+id).slideUp("slow");
}


function toggleMobileMenu(){
		
	$("#toggleTopNav").on('click', function(e){
		e.preventDefault();
		$(this).toggleClass("rotate");
		toggleElementWithId('firstNav');
	});

	$("#toggleBottomNav").on('click', function(e){
		e.preventDefault();
		$(this).toggleClass("rotate");
		toggleElementWithId('secondNav');
	});
}


function openContactForm(){
	$("#openContact").on('click', function(e){
		e.preventDefault();
		openWithId("contactContent");
	});
}

function closeContactForm(){
	//closeWithId("closeContact");
	$("#closeContact").on('click', function(e){
		e.preventDefault();
		closeWithId("contactContent");
	});
}

$(document).ready(function(){
console.log( "E Dzesi ddd ffggf");

//call functions
toggleMobileMenu();
openContactForm();
closeContactForm();


});
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