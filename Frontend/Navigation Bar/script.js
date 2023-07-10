gsap.to("#circle", {
  ease: Back.easeOut.config(1.7),
  rotate: 0,
  duration: 1,
});

var active = 3;

var minicircles = document.querySelectorAll(".minicircle");
var secondhalfs = document.querySelectorAll(".secondhalf");

gsap.to(minicircles[active - 1], {
  opacity: 0.5,
});
gsap.to(secondhalfs[active - 1], {
  opacity: 1,
});

minicircles.forEach(function (val, index) {
  val.addEventListener("click", function () {
    gsap.to("#circle", {
      rotate: (3 - (index + 1)) * 10,
      ease: Expo.easeInOut,
      duration: 1,
    });
    greyout();
    gsap.to(this, {
      opacity: 0.5,
    });
    gsap.to(secondhalfs[index], {
      opacity: 1,
      duration: 1,
    });
  });
});

function greyout() {
  gsap.to(minicircles, {
    opacity: 0.1,
  });
  gsap.to(secondhalfs, {
    opacity: 0.5,
    duration: 1,
  });
}
