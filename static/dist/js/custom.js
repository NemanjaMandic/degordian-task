window.onload = function () {
	var logo = document.getElementById("closeSmallMenu");
	var mainNavSm = document.getElementById("mainNavSm");


	logo.onclick = function () {
		TweenLite.to(mainNavSm, 1, {
			x: "542px",
			opacity: 0
		});
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
function toggleElementWithId(id) {
	$("#" + id).slideToggle('slow');
}

function toggleElementWithClass(className) {
	$("." + className).slideToggle('slow');
}

function openWithId(id) {
	$("#" + id).slideDown("slow");
}

function closeWithId(id) {
	$("#" + id).slideUp("slow");
}


function toggleMobileMenu() {

	$("#toggleTopNav").on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass("rotate");
		toggleElementWithId('firstNav');
	});

	$("#toggleBottomNav").on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass("rotate");
		toggleElementWithId('secondNav');
	});
}


function openContactForm() {
	$("#openContact").on('click', function (e) {
		e.preventDefault();
		openWithId("contactContent");
	});
}

function closeContactForm() {
	//closeWithId("closeContact");
	$("#closeContact").on('click', function (e) {
		e.preventDefault();
		closeWithId("contactContent");
	});
}


$(document).ready(function () {


	//call functions
	toggleMobileMenu();
	openContactForm();
	closeContactForm();

	//numberCounter();

	var controller = new ScrollMagic.Controller();


	var options = {  
		useEasing: true,
		  useGrouping: true,
		  separator: '',
		  decimal: '',
	};

	var netoOptions = {  
		useEasing: true,
		  useGrouping: true,
		  separator: '',
		  decimal: '',
		suffix: 'M€'
	};
	var ugovoriCount = new CountUp('ugovoriElement', 0, 3500, 0, 2.5, options);


	var ugovori2Count = new CountUp('ugovori2Element', 0, 7345, 0, 2.5, options);


	var netoCount = new CountUp('netoElement', 0, 22, 0, 2.5, netoOptions);

	var tl = new TimelineMax();

	//var tween = TweenMax.to($(this), 0.5, {y: '+=100', ease:Linear.easeNone});

	//build a scene
	var scene = new ScrollMagic.Scene({

			triggerElement: '.about-module',
			duration: '300',
			//triggerHook: 0

		}).on('enter', function () {
			if (!ugovoriCount.error) {
				ugovoriCount.start();
			} else {  
				console.error(ugovoriCount.error);
			}

			if (!ugovori2Count.error) {
				ugovori2Count.start();
			} else {  
				console.error(ugovori2Count.error);
			}

			if (!netoCount.error) {
				netoCount.start();
			} else {  
				console.error(netoCount.error);
			}
		})
		//.setClassToggle(this, 'do-stuff')

		// .addIndicators({
		// 	name: "animate box scene",
		// 	colorEnd: 'red',
		// })
		.addTo(controller);

	/////info module
	var infoTween = new TimelineMax();
	infoTween.fromTo("#infoOverlay", 0.5, {
			width: '0%'
		}, {
			width: '100%',
			yoyo: true,
			ease: Circ.easeInOut
		})

		.to("#infoOverlay", 2, {
			x: "100%",
			yoyo: true,
			ease: Circ.easeInOut
		})
		.to("#infoOverlay", 0, {
			width: "0%"
		})


	var infoScene = new ScrollMagic.Scene({
			triggerElement: '.info-module',
			//duration: '500',
			reverse: false
		})
		.setTween(infoTween)
		// .addIndicators({
		// 	name: "info scene",
		// 	colorEnd: 'red',
		// })
		.addTo(controller);

	/////info module
	var infoBoxTween = new TimelineMax();

	infoBoxTween.from('.info-content', 0.5, {
			y: 80,
			opacity: 0,
			ease: Power4.easeOut
		})
		.from('#infoBox1', 0.2, {
			y: 10,
			opacity: 0,
			ease: Power4.easeOut
		})
		.from('#infoBox2', 0.2, {
			y: 10,
			opacity: 0,
			ease: Power4.easeOut
		})
		.from('#infoBox3', 0.2, {
			y: 10,
			opacity: 0,
			ease: Power4.easeOut
		})
		.from('.cta-wrapper', 0.5, {
			y: 10,
			opacity: 0,
			ease: Power4.easeOut
		})


	var infoBoxScene = new ScrollMagic.Scene({
			triggerElement: '.box-container-animate',
			//duration: '200',
			reverse: false
		})
		.setTween(infoBoxTween)
		// .addIndicators({
		// 	name: "box scene",
		// 	colorEnd: 'red',
		// })
		.addTo(controller);


	//blog scene
	var blogTween = new TimelineMax();

	blogTween.from('#blog1', 0.2, {
			y: 8,
			opacity: 0,
			ease: Power4.easeOut
		})
		.from('#blog2', 0.2, {
			y: 8,
			opacity: 0,
			ease: Power4.easeOut
		})
		.from('#blog3', 0.2, {
			y: 8,
			opacity: 0,
			ease: Power4.easeOut
		})

	var blogScene = new ScrollMagic.Scene({
			triggerElement: '.blog-module',
			//duration: '500',
			reverse: false
		})
		.setTween(blogTween)
		// .addIndicators({
		// 	name: "blog scene",
		// 	colorEnd: 'red',
		// })
		.addTo(controller);
});
$(document).ready(function () {

  var $window = $(window);

  function isLargeScreen() {
    var windowsize = $window.width();
    if (windowsize > 768) {
      return true;
    }
  }
  var aboutGlide = new Glide('.about-glide', {
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

  if (isLargeScreen()) {
    aboutGlide.disable();
  }
  aboutGlide.mount();

  var desktopGlide = new Glide('.glide-desktop-header', {
    type: 'carousel',
    animationDuration: 1000,
    animationTimingFunc: 'ease-in-out'
  });

  //   desktopGlide.on("build.after", function(event, data) {
  //     // Access to event data
  //     console.log('Resajzuje se ', data);
  //     TweenMax.fromTo("#glideContent", 0.5, {y: '0', autoAlpha:0 }, {y: '-100', autoAlpha:1 });
  // });

  var tlHeader = new TimelineMax();

  tlHeader.set("#gcLabel1", {
    opacity: 0
  });
  tlHeader.set("#gcTitle1", {
    opacity: 0
  });
  tlHeader.set("#gcText1", {
    opacity: 0
  });
  tlHeader.set("#gcLink1", {
    opacity: 0
  });

  tlHeader.set("#gcLabel2", {
    opacity: 0
  });
  tlHeader.set("#gcTitle2", {
    opacity: 0
  });
  tlHeader.set("#gcText2", {
    opacity: 0
  });
  tlHeader.set("#gcLink2", {
    opacity: 0
  });

  //tlHeader.set("#gcLabel",{autoAlpha:0});

  desktopGlide.on("move.after", function (event, data) {
    // Access to event data


    tlHeader.set("#gcLabel1", {
      opacity: 0
    });
    tlHeader.set("#gcTitle1", {
      opacity: 0
    });
    tlHeader.set("#gcText1", {
      opacity: 0
    });
    tlHeader.set("#gcLink1", {
      opacity: 0
    });
     tlHeader.set("#gcLabel2", {
      opacity: 0
    });
    tlHeader.set("#gcTitle2", {
      opacity: 0
    });
    tlHeader.set("#gcText2", {
      opacity: 0
    });
    tlHeader.set("#gcLink2", {
      opacity: 0
    });

    tlHeader.staggerFromTo("#gcLabel1", 0.5, {
      opacity: 0,
      y: '19'
    }, {
      opacity: 1,
      y: '0'
    });
    tlHeader.staggerFromTo("#gcTitle1", 0.5, {
      opacity: 0,
      y: '19'
    }, {
      opacity: 1,
      y: '0'
    });
    tlHeader.staggerFromTo("#gcText1", 0.5, {
      y: '19',
      opacity: 0
    }, {
      y: '0',
      opacity: 1
    });
    tlHeader.staggerFromTo("#gcLink1", 0.5, {
      y: '19',
      opacity: 0
    }, {
      y: '0',
      opacity: 1
    });

    tlHeader.staggerFromTo("#gcLabel2", 0.5, {
      opacity: 0,
      y: '19'
    }, {
      opacity: 1,
      y: '0'
    });
    tlHeader.staggerFromTo("#gcTitle2", 0.5, {
      opacity: 0,
      y: '19'
    }, {
      opacity: 1,
      y: '0'
    });
    tlHeader.staggerFromTo("#gcText2", 0.5, {
      y: '19',
      opacity: 0
    }, {
      y: '0',
      opacity: 1
    });
    tlHeader.staggerFromTo("#gcLink2", 0.5, {
      y: '19',
      opacity: 0
    }, {
      y: '0',
      opacity: 1
    });
  });

  desktopGlide.mount();
});