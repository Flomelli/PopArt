const hearts = document.querySelectorAll(".heart");
const animationHearts = document.querySelectorAll(".animationHeart");

hearts.forEach((heart, index) => {
    heart.addEventListener('click', () => {
        animationHearts[index].classList.add('animation');
    });
});