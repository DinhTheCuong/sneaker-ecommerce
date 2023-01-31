// Next/Prev buttons

// next
var nextBtn = document.getElementsByClassName('next-btn');

function slideRight() {
    var slider = document.getElementById('slider');
    // alert('Slide');
    console.log(slider)
    slider.scrollLeft += 300;
};


// prev
var prevBtn = document.getElementsByClassName('prev-btn');

function slideLeft() {
    var slider = document.getElementById('slider');
    // alert('Slide');
    console.log(slider)
    slider.scrollLeft -= 300;
};