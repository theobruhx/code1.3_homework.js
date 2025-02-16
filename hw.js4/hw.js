document.addEventListener("DOMContentLoaded", function() {
    
    const mousecoordinate = document.getElementById("mousemoves");

    document.addEventListener("mousemove", function (event) {
        const x = event.clientX;
        const y = event.clientY;
    
        mousecoordinate.textContent = `X: ${x}, Y: ${y}`;
    });

});