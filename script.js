$(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
        "<i class = 'fa fa-chevron-left'></i>",
        "<i class = 'fa fa-chevron-right'></i>",
    ],
    navContainer: ".owl-carousel",
    responsive: {
        0: {
            items: 1,
            nav: false,
        },

        600: {
            items: 2,
            nav: false,
        },
        1000: {
            items: 3,
            nav: false,
        },
    },
});

function openav() {
    document.getElementById("thisBar").style.height = "20rem";
    document.getElementById("openbtn").style.display = "none";
    document.getElementById("closebtn").style.display = "inline";

}

function closenav() {
    document.getElementById("thisBar").style.height = "0";
    document.getElementById("closebtn").style.display = "none";
    document.getElementById("openbtn").style.display = "inline";
}