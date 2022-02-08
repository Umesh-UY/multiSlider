class Slider {
    constructor(index = 1, slide, next, prev, Slides, ) {
        this.sliderIndex = index;
        this.Slide = document.querySelectorAll(slide);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slides = document.querySelectorAll(Slides);
        this.next.addEventListener("click", e => this.nextSlide());
        this.prev.addEventListener("click", e => this.prevSlide());
    }

    nextSlide = function() {
        if (this.sliderIndex < this.slides.length) {
            this.sliderIndex++;
            this.showImg();

        } else if (this.sliderIndex === this.slides.length) {
            this.showImg();

        }

    }
    prevSlide = function() {
        if (this.sliderIndex > 1) {
            this.sliderIndex--;
            this.showImg();

        } else if (this.sliderIndex < 1) {
            this.showImg();

        }

    }
    showImg = function() {
        var slides = this.slides;
        var n = this.sliderIndex;
        this.slides.forEach(img => {
            img.style.display = "none";
        });
        this.slides[n - 1].style.display = "block";




    }
}


let slider = new Slider(1, '.slide', '.next', '.prev', '.slides', );
slider.showImg();
let slider2 = new Slider(1, '.slide2', '.next2', '.prev2', '.slides2', );
slider2.showImg();