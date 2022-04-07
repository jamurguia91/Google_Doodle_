// GSAP included in `index.html`
console.log('OK');

 gsap.to( '#mtEyeLeft', {
     x:13,
     y:16,
   duration:2,
   delay:3,
   repeat:-1,
   yoyo: true
  });  

 gsap.to( '#mtEyeRight', {
     x:13,
     y:16,
   duration:2,
   delay:3,
   repeat:-1,
   yoyo: true
  });     

 gsap.fromTo( '#cloudLeft', {x:0, y:0, }, {
     x:15,
     y:22,
   duration: 2,
   rotate: 15,
   repeat: -1,
   delay:1,
   yoyo: true
  });

 gsap.fromTo( '#cloudRight', {x:0, y:0, }, {
     x:15,
     y:22,
   duration: 2,
   rotate: 15,
   repeat: -1,
   delay:1,
   yoyo: true
  });

var tl = gsap.timeline({ repeat:-1});
tl.to('#ccLeftPupil', {duration: 2, x:5, scale:.8 })
.to('#ccLeftPupil', {duration: 1, x:-10, scale:1.3 })
.to('#ccLeftPupil', {duration: 2, x:0, y:-8 })
.to('#ccLeftPupil', {duration: 3, x:0, y:10, scale:1 })
.to('#ccLeftPupil', {duration: 2, x:0, y:0 });
//SHIFTY EYES!//

tl.to('#ccRightPupil', {duration: 2, y:5 })
.to('#ccRightPupil', {duration: 1, y:-10, scale: 1.3 })
.to('#ccRightPupil', {duration: 2, y:0, x:-8 })
.to('#ccRightPupil', {duration: 3, y:0, x:10, scale:.7 })
.to('#ccRightPupil', {duration: 2, y:0, x:0, scale:1 });
//SHIFTY EYES!//

gsap.to(".leftCoin", {
    y:-50,
    yoyo: true,
    repeat:-1
 });

gsap.to(".rightCoin", {
    y:-50,
    delay:.5,
    yoyo: true,
    repeat:-1
 });

gsap.to(".boot", {
    rotate:10,
    duration:2,
    yoyo: true,
    repeat:-1
 });
gsap.to(".mushy", {
    rotate:10,
    duration:2,
    yoyo: true,
    repeat:-1
 });
gsap.to("#leftSpot", {
    rotate:25,
    duration:2,
    yoyo: true,
    repeat:-1
 });
gsap.to("#centerSpot", {
    rotate:25,
    duration:2,
    yoyo: true,
    repeat:-1
 });
gsap.to("#rightSpot", {
    rotate:25,
    duration:2,
    x:-6,
    y:8,
    yoyo: true,
    repeat:-1
 });
gsap.to("#mushroomTop", {
    rotate:1,
    duration:2,
    x:-6,
    y:8,
    yoyo: true,
    repeat:-1
 });

gsap.to("#smolEyeRight", {
    y:-65,
    x:-30,
    duration:4,
    yoyo: true,
    repeat:-1
 });

gsap.to("#smolEyeLeft", {
    y:-65,
    x:-30,
    duration:4,
    yoyo: true,
    repeat:-1
 });

var tl = gsap.timeline();
tl.to('#mushroomREye', {duration: 2, x:5 })
.to('#mushroomREye', {duration: 1, x:-10 })
.to('#mushroomREye', {duration: 2, x:0, y:-5 })
.to('#mushroomREye', {duration: 3, x:0, y:3 })
.to('#mushroomREye', {duration: 1, x:-10 })
.to('#mushroomREye', {duration: 2, x:0, y:-5 })
.to('#mushroomREye', {duration: 3, x:0, y:3 })
.to('#mushroomREye', {duration: 2, x:0, y:0 });
//Mushy Eye thing 
var tl = gsap.timeline();
tl.to('#mushroomLEye', {duration: 2, x:5 })
.to('#mushroomLEye', {duration: 1, x:-10 })
.to('#mushroomLEye', {duration: 2, x:0, y:-5 })
.to('#mushroomLEye', {duration: 3, x:0, y:3 })
.to('#mushroomLEye', {duration: 1, x:-10 })
.to('#mushroomLEye', {duration: 2, x:0, y:-5 })
.to('#mushroomLEye', {duration: 3, x:0, y:3 })
.to('#mushroomLEye', {duration: 2, x:0, y:0 });
//Mushy Eye thing 

// New Last Minute Coding for added flavor 3-20-22
gsap.to(".leftCC", {
    rotate:-1.5,
    // y:2,
    // x:2,
    transformOrigin:"50% 50%",    
    duration:.5,
    yoyo: true,
    repeat:-1
 });
gsap.to(".rightCC", {
    rotate:-1.5,
    // y:2,
    // x:2,
    transformOrigin:"50% 50%",    
    duration:.5,
    yoyo: true,
    repeat:-1
 });