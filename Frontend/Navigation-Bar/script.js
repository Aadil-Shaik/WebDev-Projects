const timeline = gsap.timeline({ defaults: { duration: 1, delay: 1 } });

//$('.tlt').textillate({ in: { effect: 'rollIn' } });
// gsap.from("#fourthh1", {
//   onStart: function () {
//     $("#fourthh1").textillate({
//       in: {
//         effect: "fadeInUp",
//         callback: function () {
//           $("#fourthh1").textillate("out");
//         },
//       },
//       out: { effect: "fadeOutUp" },
//     });
//   },
// });

timeline
  .from("#fourthh1", {
    opacity: 0,
    delay: 0,
    onStart: function () {
      $("#fourthh1").textillate({
        in: {
          effect: "fadeInUp",
          sync: true,
          callback: function () {
            $("#fourthh1").textillate("out");
          },
        },
        out: { delay: 1000, effect: "fadeOutUp", sync: true },
      });
    },
  })
  .from("#thirdh1", {
    opacity: 0,
    onStart: function () {
      $("#thirdh1").textillate({
        in: {
          effect: "fadeInUp",
          sync: true,
          callback: function () {
            $("#thirdh1").textillate("out");
          },
        },
        out: { delay: 1000, effect: "fadeOutUp", sync: true },
      });
    },
  })
  .from("#secondh1", {
    opacity: 0,
    onStart: function () {
      $("#secondh1").textillate({
        in: {
          effect: "fadeInUp",
          sync: true,
          callback: function () {
            $("#secondh1").textillate("out");
          },
        },
        out: { delay: 1000, effect: "fadeOutUp", sync: true },
      });
    },
  })
  .from("#firsth1", {
    opacity: 0,
    onStart: function () {
      $("#firsth1").textillate({
        in: {
          effect: "fadeInUp",
          sync: true,
          callback: function () {
            $("#firsth1").textillate("out");
          },
        },
        out: { delay: 1000, effect: "fadeOutUp", sync: true },
      });
    },
  })
  .from("#fifthh1", {
    opacity: 0,
    onStart: function () {
      $("#fifthh1").textillate({
        in: {
          effect: "fadeIn",
          sync: true,

          callback: function () {
            $("#fifthh1").textillate("out");
          },
        },
        out: { delay: 2000, effect: "fadeOut", sync: true },
      });
    },
  })
  .from("#sixthh1", {
    opacity: 0,
    onStart: function () {
      $("#sixthh1").textillate({
        in: {
          effect: "fadeIn",
          sync: true,
          callback: function () {
            $("#sixthh1").textillate("out");
          },
        },
        out: { delay: 2000, effect: "fadeOut", sync: true },
      });
    },
  })
  .from("#circle", {
    opacity: 0,
    delay: 3,
  })
  .to("#circle", {
    ease: Back.easeOut.config(1.7),
    rotate: 0,
    duration: 1,
  })
  .to("#panel", {
    right: "3%",
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
