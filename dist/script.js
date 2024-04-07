
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageEffect(".img", {
    style: 2, //Select Style
     // Debug Panel
    config: {"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":1312268},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.663951371532599},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.98,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    preset: "./presets/wigglewobble.json",
  });
  Shery.imageEffect(".img2", {
    style: 6, //Select Style
   // Debug Panel
    config: {"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":5.57,"range":[0,10]},"scale":{"value":39.69,"range":[0,100]},"speed":{"value":0.95,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.3119575861952522},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.73,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    preset: "./presets/wigglewobble.json",
  });

// !  magnet ?
  Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
//  ! imgmagnet 
Shery.imageMasker(".mg2" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Dushyant",
    ease: "cubic-bezier(10, 10, 10, 10)",
    duration: 1,
  });
  Shery.imageMasker(".mg3" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Ds sharma",
    ease: "cubic-bezier(10, 10, 10, 10)",
    duration: 1,
  });


//   img hocer 
Shery.hoverWithMediaCircle(".mg4" /* Element to target.*/, {
    images: ["", "image2.jpg", "image3.jpg"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
  });

// ??

  $(document).ready(function(){
    $('.bxslider').bxSlider({
      minSlides: 7, // Set the minimum number of slides to be displayed
      maxSlides: 7, // Set the maximum number of slides to be displayed
      slideWidth: 200, // Set the width of each slide
      slideMargin: 10, // Set the margin between each slide
      controls: false, // Hide the navigation controls
      pager: false, // Hide the pager (dots)
      auto: true, // Enable auto swipe
      pause: 2000, // Set the amount of time (in ms) between each auto transition
      autoHover: true, // Auto show will pause when mouse hovers over slider
      autoDelay: 0 // 
    });
  });
  $(document).ready(function(){
    $('.bxslider3').bxSlider({
        minSlides: 3, // Set the minimum number of slides to be displayed
        maxSlides: 3, // Set the maximum number of slides to be displayed
        slideWidth: 450, // Set the width of each slide
        slideMargin: 10, // Set the margin between each slide
        controls: false, // Hide the navigation controls
        pager: false, // Hide the pager (dots)
        auto: true, // Enable auto swipe
        pause: 2000, // Set the amount of time (in ms) between each auto transition
        autoHover: true, // Auto show will pause when mouse hovers over slider
        autoDelay: 0 // Time (in ms) auto show should wait before starting
    });
});

  Shery.hoverWithMediaCircle(".magnet2" /* Element to target.*/, {
    images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
  });
  $(document).ready(function(){
    $('.bxslider2').bxSlider({
      
      controls: false, // Hide the navigation controls
      pager: true ,// Hide the pager (dots)
      auto: true, // Enable auto swipe
      pause: 2000, // Set the amount of time (in ms) between each auto transition
      autoHover: true, // Auto show will pause when mouse hovers over slider
      autoDelay: 0 // 
    });
  });
  