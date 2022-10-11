var leftArrowPop = document.getElementById('leftArrow');
var rightArrowPop = document.getElementById('rightArrow');
var leftArrowLat = document.getElementById('leftArrowLatest');
var rightArrowLat = document.getElementById('rightArrowLatest');

leftArrowPop.onclick = function() {
    document.getElementById("containerPop").scrollLeft += 20;
}

rightArrowPop.onclick = function() {
    document.getElementById("containerPop").scrollLeft -= 20;
}

leftArrowLat.onclick = function() {
    document.getElementById("containerLatest").scrollLeft += 20;
}

rightArrowLat.onclick = function() {
    document.getElementById("containerLatest").scrollLeft -= 20;
}