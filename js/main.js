window.onload = function() {
    var overlay = document.getElementById('overlay'),
        overlayContent = document.getElementById('overlay-content');

    setTimeout(function() {
        overlay.className = overlay.className.replace('hidden', '');
        overlayContent.className += ' center';
        setTimeout(function() {
            overlay.className += ' hidden';
            overlayContent.className += ' hidden';
        }, 5000);
    },3000);
};