function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}loco();



// page 1

// Moving stripe on scroll

gsap.to('.stripe h1', {
  scrollTrigger:{
    trigger:'.stripe h1',
    scroller:'.main',
    start:'top 100%',
    scrub:1
  },
  marginLeft:"-100%"
})


// fade visible effect

// for para1
gsap.to('.para1', {
  scrollTrigger:{
    trigger:'.para1',
    scroller:'.main',
    start:'top 55%',
  },
  duration:1,
  opacity:1
})

// for para2
gsap.to('.para2', {
  scrollTrigger:{
    trigger:'.para2',
    scroller:'.main',
    start:'top 65%',
  },
  duration:1,
  opacity:1
})

// for hi button
gsap.to('.page1 button', {
  scrollTrigger:{
    trigger:'.page1 button',
    scroller:'.main',
    start:'top 85%',
  },
  duration:1,
  opacity:1
})

// page 2

// for heading above images

gsap.from('.content2 h3', {
  scrollTrigger:{
    trigger:'.content2 h3',
    scroller:'.main',
    start:'top 55%',
  },
  y:100,
  opacity:0,
  stagger:1,
  duration:1,
})

// for images

gsap.from('.element img', {
  scrollTrigger:{
    trigger:'.element img',
    scroller:'.main',
    start:'top 65%',
  },
  y:100,
  opacity:0,
  stagger:.2,
})

// hover effect on box
const white_stripe = document.querySelectorAll('.white_stripe');
const box3 = document.querySelectorAll('.box3');

box3.forEach((elem, i) => {
        elem.addEventListener('mouseenter', ()=> {
          elem.style.color = '#000';
        white_stripe[i].style.opacity = '1';
        white_stripe[i].style.transform = 'translateX(0)';
  });
});
box3.forEach((elem, i) => {
        elem.addEventListener('mouseleave', ()=> {
        elem.style.color = '#fff';
        white_stripe[i].style.transform = 'translateX(-100%)';
        white_stripe[i].style.opacity = '0';
  });
});
