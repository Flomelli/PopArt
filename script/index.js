const heart = document.querySelector(".heart");
const animationHeart = document.querySelector(".animationHeart");

heart.addEventListener('click', () => {
    animationHeart.classList.add('animation');
});