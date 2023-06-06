let liked = false;
const heartImg = document.querySelector('.heart');

function toggleLike() {
    liked = !liked;
    if (liked) {
        heartImg.src = './images/filledin.png';
    } else {
        heartImg.src = "./images/heart.png";
    }
}