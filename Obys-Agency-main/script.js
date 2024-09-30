function loadingAnimation() {
  // creating a timeline
  var tl = gsap.timeline();

  // making all the animations of h1 to start or go from the given properties to the default values in our css
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  // we are setting the timer and h2 i.e now to go from opacity 0 and in case of timer 0 to 100
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var timer;
      var grow = 0;
      timer = setInterval(function () {
        if (grow < 100) {
          h5timer.textContent = grow++;
        } else {
          h5timer.textContent = grow;
          clearInterval(timer);
        }
      }, 33);
    },
  });
  tl.from("#loader p",{
    opacity:0,
    duration:0.2,
  })
  // we call the animation name from gsap and change it to 1 from 0
  tl.to(".line h2", {
    animationName: "fontChange",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 0,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    ease: Power4,
  });

  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav",{
    opacity:0
  })
  tl.from('#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1',{
    y:120,
    stagger:0.2
  })
}

function cursorAnimation(){
    document.addEventListener('mousemove',function(details){
        gsap.to("#cursor",{
            left:details.x,
            top:details.y
        })
    })
    Shery.makeMagnet("#nav-part3 h4",{
        strength:5.0,
        maxDistance:600
    });
}


loadingAnimation();
cursorAnimation();