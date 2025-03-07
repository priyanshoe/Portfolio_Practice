// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });





gsap.to('.stripe h1', {
    scrollTrigger:{
      trigger:'.stripe h1',
      scroller:'body',
      start:'.page1 bottom',
      end: 'top -20%',
      scrub:2,
      markers: true
    },
    marginLeft:"-100%"
  })