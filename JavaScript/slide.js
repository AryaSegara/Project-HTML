//Document Picture Slides
const pictureSlider = document.querySelector('[data-picture-slider]');
const pictureSliderItem = document.querySelectorAll('[data-picture-slider-item]');
const pictureSliderNextBtn = document.querySelector('[data-next-btn]');
const pictureSliderPrevBtn = document.querySelector('[data-prev-btn]');

let currentSliderPos = 0;
let lastActiveSliderItem = pictureSliderItem[0];

// Function Update slides
const updateSliderPos = () =>{
    lastActiveSliderItem.classList.remove('active');
    pictureSliderItem[currentSliderPos].classList.add('active');
    lastActiveSliderItem = pictureSliderItem[currentSliderPos];
}

// Function Slides to Next
const sliderNext = () =>{
    if(currentSliderPos >= pictureSliderItem.length -1){
        currentSliderPos = 0;
    }
    else{
        currentSliderPos++;
    }
    updateSliderPos();
}
// Add Event Click To next
pictureSliderNextBtn.addEventListener('click', sliderNext);

// Function Slides To Prev
const sliderPrev = () =>{
    if(currentSliderPos <= 0 ){
        currentSliderPos = pictureSliderItem.length-1;
    }
    else{
        currentSliderPos++;
    }
    updateSliderPos();
}
// Add Event click To Prev
pictureSliderPrevBtn.addEventListener('click', sliderPrev);


// function Auto Slides Picture 
let autoSlideInterval;

const autoSlide = () => {
    autoSlideInterval = setInterval( () =>{
        sliderNext();
    }, 7100);
}

// Add Event mouseover (when you click next or prev it immediately clears the interval)
addEventOnElements([pictureSliderNextBtn,pictureSliderPrevBtn], 'mouseover', () =>{
    clearInterval(autoSlideInterval);
});

// Add Event mouseout (when we don't click the next or prev icon the slide automatically loads)
addEventOnElements([pictureSliderNextBtn,pictureSliderPrevBtn], 'mouseout', autoSlide);
window.addEventListener('load', autoSlide);
