let liked = false;
let heartImg = document.querySelector('.heart');

function toggleLike() {
    liked = !liked;
    if (liked) {
        heartImg.src = '../images/A.png';
    } else {
        heartImg.src = '../images/heart.png';
    }
}