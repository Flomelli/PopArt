let liked = false;
let heartImg = document.querySelector('.heart');

function toggleLike() {
    liked = !liked;
    if (liked) {
        heart.src = './images/filledheart.png';
    } else {
        heart.src = './images/heart.png';
    }
}