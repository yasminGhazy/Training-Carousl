/*
document.addEventListener('DOMContentLoaded', function (e) {
   / /*let text = e.target.querySelector(".slide-item");

    let cur = document.querySelector(".slide-item");
    cur.style.display = "block";

});
var index = 1;
function carousl(selector, eventName, fun) {
    let slides = document.querySelectorAll(selector);
    for (let i = 0; i < slides.length; i++) {
        slides[i].addEventListener(eventName, fun);
    }
}
carousl('.slider-prev', 'click', function (e) {
    var slides = document.querySelectorAll(".slide-item");
    let cur = index;
    index--;
    if (index == 0) {

        slides[index].style.display = "none";
        index = slides.length;
        slides[index - 1].style.display = "block";
    }
    else {
        slides[index].style.display = "none";
        slides[index - 1].style.display = "block";
    }
});
carousl('.slider-next', 'click', function (e) {
    var slides = document.querySelectorAll(".slide-item");
    index++;
    if (index > slides.length) {

        slides[index - 2].style.display = "none";
        index = 1;
        slides[index - 1].style.display = "block";
    }
    else {
        slides[index - 2].style.display = "none";
        slides[index - 1].style.display = "block";
    }
});
*/
class Carousel {
    constructor(ClassName) {
        this.ClassName = ClassName;
        this.sliders=document.querySelectorAll(this.ClassName);
    }
    init() {
        for (let i = 0; i < this.sliders.length; i++) {
            //* slider container has id with index of slide item. init with 0
            this.sliders[i].setAttribute("id", "slider-" + i);
            let itemsContainer = this.sliders[i].querySelector(".slider-items-container");
            itemsContainer.setAttribute("id", 1)
            //* show first slide item in each slider class
            let curItem = this.sliders[i].querySelector(".slide-item");
            curItem.style.display = "block";
        }
    }
    run() {
        for (let i = 0; i < this.sliders.length; i++) {

            //* add listener to each prev /next btn in each slider
            let prevArrow = document.querySelector("#slider-" + i).querySelectorAll('.slider-prev');
            for (let i = 0; i < prevArrow.length; i++) {
                prevArrow[i].addEventListener('click', function (e) {
                    let classId = e.target.parentElement; //*or e.path[1/2]
                    let index = classId.querySelector(".slider-items-container").getAttribute("id");

                    let slides = classId.querySelectorAll(".slide-item");
                    index--;
                    if (index == 0) {

                        slides[index].style.display = "none";
                        index = slides.length;
                        slides[index - 1].style.display = "block";
                    }
                    else {
                        slides[index].style.display = "none";
                        slides[index - 1].style.display = "block";
                    }
                    let itemsContainer = classId.querySelector(".slider-items-container");
                    itemsContainer.setAttribute("id", index)
                });
            }

            let nextArrow = document.querySelector("#slider-" + i).querySelectorAll('.slider-next');
            for (let i = 0; i < nextArrow.length; i++) {
                nextArrow[i].addEventListener('click', function (e) {
                    let classId = e.target.parentElement;
                    let index = classId.querySelector(".slider-items-container").getAttribute("id");

                    let slides = classId.querySelectorAll(".slide-item");
                    index++;
                    if (index > slides.length) {

                        slides[index - 2].style.display = "none";
                        index = 1;
                        slides[index - 1].style.display = "block";
                    }
                    else {
                        slides[index - 2].style.display = "none";
                        slides[index - 1].style.display = "block";
                    }
                    let itemsContainer = classId.querySelector(".slider-items-container");
                    itemsContainer.setAttribute("id", index)
                });
            }
        }
    }
}
let myCarousel = new Carousel('.slider');
myCarousel.init();
myCarousel.run();