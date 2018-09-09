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