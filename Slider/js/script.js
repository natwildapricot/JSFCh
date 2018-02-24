var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next');

// Function wich give us a massive
var images = document.querySelectorAll('#gallery .photos img');
var i=0
console.log(images)

btn_prev.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1; if (i<0) {
        i = images.length - 1;
    };
    images[i].style.display = 'block';

};

btn_next.onclick = function(){
    images[i].style.display = 'none';
    i++; if (i>=images.length) {
    i=0;}
    images[i].style.display = 'block';
};
