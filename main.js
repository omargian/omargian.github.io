// gsap.to()... infinity and beyond!
// for more check out greensock.com
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  // Defaults are used by all ScrollTriggers
  toggleActions: "restart pause resume pause", // Scoll effect Forward, Leave, Back, Back Leave
  markers: true, // Easaly remove markers for production.

});

const timelineHeader = gsap.timeline({
  scrollTrigger: {
    id: "ZOOM", // Custom label to the marker
    trigger: "#home", // What element triggers the scroll
    scrub: true, // Add a small delay of scrolling and animation. `true` is direct
    start: "top top", // Start at top of Trigger and at the top of the viewport
    end: "+=100% 0px", // The element is 500px hight and end 50px from the top of the viewport
    pin: true // Pin the element true or false
  } });


timelineHeader.
to(".homeSlider", {
  scale: 1.5 },
"sameTime").
to(".homeSliderReveal", {
  scale: 3 },
"sameTime");

ScrollTrigger.create({
  snap: 0.333
})
