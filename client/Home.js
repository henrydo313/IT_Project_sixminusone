var leftArrowPop = document.getElementById('leftArrow');
var rightArrowPop = document.getElementById('rightArrow');
var leftArrowLat = document.getElementById('leftArrowLatest');
var rightArrowLat = document.getElementById('rightArrowLatest');

leftArrowPop.onclick = function() {
    document.getElementById("containerPop").scrollLeft -= 200;
}

rightArrowPop.onclick = function() {
    document.getElementById("containerPop").scrollLeft += 200;
}

leftArrowLat.onclick = function() {
    document.getElementById("containerLatest").scrollLeft -= 200;
}

rightArrowLat.onclick = function() {
    document.getElementById("containerLatest").scrollLeft += 200;
}