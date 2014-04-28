window.onload = function() {
    var overlay = document.querySelector('.overlay'),
        overlayContent = document.querySelector('.overlay-content');

    setTimeout(function() {
        overlay.className = "overlay";
        overlayContent.className += " center";
        setTimeout(function() {
            overlay.className += " isHidden";
            overlayContent.className += " isHidden";
        }, 5000);
    },3000);
};