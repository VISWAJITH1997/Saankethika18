//Here goes main javascript code
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

//getting viewport width and height;
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0];
var x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;
console.log("Viewport width and height : " + x + ", " + y);

d.getElementById('container').style.height = y + "px";

function absolutePositioning() {
    var contHeight = d.getElementById('container').clientHeight;
    console.log(contHeight);

    //setting elements absolute top position
    d.getElementById('c1').style.top = contHeight - d.getElementById('c1').clientHeight + "px";
    d.getElementById('c2').style.top = contHeight - d.getElementById('c2').clientHeight + "px";


    var contWidth = d.getElementById('container').clientWidth;
    console.log(contWidth);
    var conWidthHalf = contWidth / 2;
    //setting elements absolute left position
    d.getElementById('c1').style.left = conWidthHalf - d.getElementById('c1').clientWidth / 2 + "px";
    d.getElementById('c2').style.left = conWidthHalf - d.getElementById('c2').clientWidth / 2 + "px";
};

absolutePositioning();

window.onresize = function (event) {
    absolutePositioning();
}
