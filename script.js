const body = document.body,
    scrollWrap = document.getElementsByClassName("smooth-scroll")[0],
    height = scrollWrap.getBoundingClientRect().height - 1,
    speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += ((window.pageYOffset - offset) * speed);

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();
const content = document.querySelector(".distort");
let currentPos = window.pageYOffset;

const callDistort = function () {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = (diff * 0.35) / 100;

    content.style.transform = "skewY(" + speed + "deg)";
    currentPos = newPos;
    requestAnimationFrame(callDistort);
};

callDistort();


let tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".slider", {
    y: "-100%",
    duration: 1.1,
    delay: 4
});
tl.to(".intro", {
    y: "-100%",
    duration: 1,
}, "-=1"
);
// Wrap every letter in a span
// var textWrapper = document.querySelector('.myName');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: false})
//   .add({
//     targets: '.myName .letter',
//     translateY: [100,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 1400,
//     delay: (el, i) => 4800 + 50 * i

const circleType = new CircleType(
    document.getElementById("rotated")
).radius(50);

$(window).scroll(() => {
    var offset2 = $(window).scrollTop();
    offset2 = offset2 * 0.4;

    $(".circular-text").css({
        "-webkit-transform": "rotate(" + offset2 + "deg)",
        "-ms-transform": "rotate(" + offset2 + "deg)",
        "-o-transform": "rotate(" + offset2 + "deg)",
        "transform": "rotate(" + offset2 + "deg)"
    });
});
// var text = document.querySelector('.one');
// new simpleParallax(text, {
//     orientation: 'left',
// });
// var text = document.querySelector('.two');
// new simpleParallax(text, {
//     orientation: 'right',

// });
// var text = document.querySelector('.three');
// new simpleParallax(text, {
//     orientation: 'left'
// });
