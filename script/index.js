let liked = false;
let heartImg = document.querySelector('.heart');

function toggleLike() {
    liked = !liked;
    if (liked) {
        heartImg.src = './images/filledheart.png';
    } else {
        heartImg.src = './images/heart.png';
    }
}