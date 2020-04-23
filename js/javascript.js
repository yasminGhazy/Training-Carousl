
class Carousel {
    constructor(selector) {
        this.selector = selector;
        this.sliders = document.querySelectorAll(this.selector);
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
            let prevArrow = this.sliders[i].querySelector('.slider-prev');
            prevArrow.addEventListener('click', function (e) {
                let parent = e.target.parentElement; //*or e.path[1/2]
                let itemsContainer = parent.querySelector(".slider-items-container");
                let index = itemsContainer.getAttribute("id");
                let slides = parent.querySelectorAll(".slide-item");
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
                itemsContainer.setAttribute("id", index)
            });


            let nextArrow = this.sliders[i].querySelector('.slider-next');
            nextArrow.addEventListener('click', function (e) {
                let parent = e.target.parentElement;
                let itemsContainer = parent.querySelector(".slider-items-container");
                let index = itemsContainer.getAttribute("id");
                let slides = parent.querySelectorAll(".slide-item");
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
                itemsContainer.setAttribute("id", index)
            });

        }
    }
}
let myCarousel = new Carousel('.slider');
myCarousel.init();
myCarousel.run();