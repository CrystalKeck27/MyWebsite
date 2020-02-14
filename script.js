var cnv = document.getElementById('backgroundCanvas');
var width = cnv.width;
var height = cnv.height;
var ctx = cnv.getContext('2d');
ctx.fillStyle = 'black';
console.log(width, height);
ctx.fillRect(0, 0, 16, 9);
ctx.fillStyle = 'gray';
ctx.fillRect(8, 5, 16, 8);
