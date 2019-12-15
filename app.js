// public variable 
var mousePosition;
var offset = [0, 0];
var div;
var isDown = false;
var skElement = $('#sk-video-wrap');

$('#sk-section-2 img').css('width', skElement.width());
// skElement.on('mousedown', function (e) {
$(document).on('mousedown', '#sk-slider', function (e) {
    console.log('down');
    isDown = true;
    offset = [
        $('#sk-slider').offset().left,
        $('#sk-slider').offset().top
    ];
});

// skElement.addEventListener('mouseup', function () {
$(document).on('mouseup', function (e) {
    isDown = false;
});


// skElement.addEventListener('mousemove', function (event) {
$(document).on('mousemove', function (event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
            x: event.pageX - skElement.offset().left,
            y: event.pageY - skElement.offset().top
        };

        if (mousePosition.x >= 0 && mousePosition.x <= skElement.width()) {
            $('#sk-slider').css('left', mousePosition.x + 'px');
            $('#sk-section-2').css('width', mousePosition.x + 'px');
        }

        console.log(mousePosition.x, skElement.width());
    }
});