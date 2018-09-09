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

		.addIndicators({
			name: "animate box scene",
			colorEnd: 'red',
		})
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
		.addIndicators({
			name: "info scene",
			colorEnd: 'red',
		})
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
		.addIndicators({
			name: "box scene",
			colorEnd: 'red',
		})
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
		.addIndicators({
			name: "blog scene",
			colorEnd: 'red',
		})
		.addTo(controller);
});