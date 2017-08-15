console.log('Loaded!');
var element = document.getElementById('main text');
element.innerHTML = 'new value';
var img = document.getElementById('madi');
img.onclick = function()
{
    var interval = setInterval(moveleft , 100);
    img.style.marginleft = '100px';
};
