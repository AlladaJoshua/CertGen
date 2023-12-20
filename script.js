const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const nameInput = document.getElementById('name');
const courseInput = document.getElementById('course');
const downloadBtn = document.getElementById('download-btn');

const image = new Image();
image.src = "Cert.png";
image.onload = function() {
    drawImage();
    drawImage2();
};

function clearCanvas() {
    // Clear the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the image as the background
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}

function drawImage() {
    clearCanvas();

    ctx.font = '75px monotype corsiva';
    ctx.fillStyle = '#a27b42';
    const textWidth = ctx.measureText(nameInput.value).width;
    const xPosition = (canvas.width - textWidth) / 2;
    ctx.fillText(nameInput.value, xPosition, 270);
}

function drawImage2() {
    clearCanvas();

    // Draw the first text
    ctx.font = '75px monotype corsiva';
    ctx.fillStyle = '#a27b42';
    const textWidth1 = ctx.measureText(nameInput.value).width;
    const xPosition1 = (canvas.width - textWidth1) / 2;
    ctx.fillText(nameInput.value, xPosition1, 270);

    // Draw the second text
    ctx.font = '24px monotype corsiva';
    ctx.fillStyle = '#a27b42';
    const textWidth2 = ctx.measureText(courseInput.value).width;
    const xPosition2 = 400 + (700 - 400 - textWidth2) / 2;
    ctx.fillText(courseInput.value, xPosition2, 332);
}

nameInput.addEventListener('input', function() {
    drawImage();
});

courseInput.addEventListener('input', function() {
    drawImage2();
});

downloadBtn.addEventListener('click', function() {
    downloadBtn.href = canvas.toDataURL('image/jpg')
    downloadBtn.download = 'Certificate-' + nameInput.value
})

