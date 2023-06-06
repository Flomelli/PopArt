let liked = false;
const likeButton = document.getElementById('likeButton');

function toggleLike() {
    liked = !liked;
    if (liked) {
        likeButton.classList.add('liked');
    } else {
        likeButton.classList.remove('liked');
    }
}