const timeline = gsap.timeline({ defaults: { duration: 1, delay: 1 } });

// .from("#fifthh1", {
//   opacity: 0,
//   onStart: function () {
//     $("#fifthh1").textillate({
//       in: {
//         effect: "fadeIn",
//         sync: true,

//         callback: function () {
//           $("#fifthh1").textillate("out");
//         },
//       },
//       out: { delay: 2000, effect: "fadeOut", sync: true },
//     });
//   },
// })

timeline
  .from("#fourthh1", {
    opacity: 0,
    y: "50%",
  })
  .to("#fourthh1", {
    opacity: 0,
    y: "-50%",
  })
  .from("#thirdh1", {
    opacity: 0,
    y: "50%",
    delay: "-1",
  })
  .to("#thirdh1", {
    opacity: 0,
    y: "-50%",
  })
  .from("#secondh1", {
    opacity: 0,
    y: "50%",
    delay: "-1",
  })
  .to("#secondh1", {
    opacity: 0,
    y: "-50%",
  })
  .from("#firsth1", {
    opacity: 0,
    y: "50%",
    delay: "-1",
  })
  .to("#firsth1", {
    opacity: 0,
    y: "-50%",
  })
  .from("#fifthh1", {
    delay: "-1",
    opacity: 0,
  })
  .from("#sixthh1", {
    opacity: 0,
  })
  .to("#fifthh1", {
    delay: 0,
    opacity: 0,
  })
  .to("#sixthh1", {
    delay: 2,
    opacity: 0,
  })
  .from("#circle", {
    delay: 0,
    opacity: 0,
  })
  .to("#circle", {
    ease: Back.easeOut.config(1.7),
    rotate: 0,
    duration: 1,
  })
  .to("#panel", {
    right: "3%",
    delay: "0.5",
    duration: 0.9,
  });

var active = 3;

var minicircles = document.querySelectorAll(".minicircle");
var secondhalfs = document.querySelectorAll(".secondhalf");

gsap.to(minicircles[active - 1], {
  opacity: 0.9,
});
gsap.to(secondhalfs[active - 1], {
  opacity: 1,
});

minicircles.forEach(function (val, index) {
  val.addEventListener("click", function () {
    gsap.to("#circle", {
      rotate: (3 - (index + 1)) * 20,
      ease: Expo.easeInOut,
      duration: 1,
    });
    greyout();
    gsap.to(this, {
      opacity: 0.9,
    });
    gsap.to(secondhalfs[index], {
      opacity: 1,
      duration: 1,
    });
  });
});

function greyout() {
  gsap.to(minicircles, {
    opacity: 0.2,
  });
  gsap.to(secondhalfs, {
    opacity: 0.2,
    duration: 1,
  });
}
