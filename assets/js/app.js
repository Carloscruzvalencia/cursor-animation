var cursor = document.getElementById('cursoreff');
document.addEventListener('mousemove', function(e) {
    var x = e.clientX +  20;
    var y = e.clientY + 20;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});