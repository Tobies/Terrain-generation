let checkBox;
let checkBoxValue = false;
let layer1;
let layer2;
let layer3;
let elevation;
let button;
let randomize;
let buttonNavigate;
var startLoc;
var endLoc;
var grid = [];
let mapGraphics;
//"freq: " + layer1.value() + ", octaves: " + 0.8 + ", aplittude: " + layer3.value() + ", elevation: " + elevation.value())
function setup ()
{
    createCanvas(400, 400);
    mapGraphics = createGraphics(width, height);

    div = createDiv("Frequency slider:")
    div.position(width+20, 0)
    layer1 = createSlider(0.1, 1, 1, 0.01);
    layer1.position(width + 20, 20);

    div = createDiv("Octaves slider:")
    div.position(width+20, 40)
    layer2 = createSlider(0.1, 1, 0.50, 0.1);
    layer2.position(width + 20, 60);

    div = createDiv("Aplittude slider:")
    div.position(width+20, 80)
    layer3 = createSlider(0.1, 1, 0.25, 0.01);
    layer3.position(width+20, 100);


    div = createDiv("Elevation slider:")
    div.position(width+20, 120)
    elevation = createSlider(0.1, 5, 2, 0.1);
    elevation.position(width+20, 140); 

    randomize = createButton("Randomize!");
    randomize.position(width+20, 165);
    randomize.mouseClicked(handleRandomized);
    randomize.size(130, 20);
    
    button = createButton("Generate!");
    button.mouseClicked(handleButton);
    button.position(width+20, 190);
    button.size(130, 20);


}

function handleRandomized()
{
    layer1.value(random(0.1, 1));
    layer2.value(random(0.1, 1));
    layer3.value(random(0.1, 1));
    elevation.value(random(0.1, 5));
}



function handleButton()
{
    generateTerrain(layer1.value(), 0.8, layer3.value(), elevation.value());
    console.log("freq: " + layer1.value() + ", octaves: " + 0.8 + ", aplittude: " + layer3.value() + ", elevation: " + elevation.value())
}
function getColor(c)
{
    var newC = []
    if (c < 0.1)
    {
        newC = {r:15, g:41, b:81};
    }
    else if (c < 0.2)
    {
        newC = {r:17, g:47, b:93};
    }
    else if (c < 0.3)
    {
        newC = {r:22, g:60, b:113};
    }
    else if (c < 0.4)
    {
        newC = {r:28, g:77, b:141};
    }
    else if (c < 0.5)
    {
        newC = {r:246, g:219, b:133};
    }
    else if (c < 0.6)
    {
        newC = {r:153, g:187, b:101};
    }
    else if (c < 0.7)
    {
        newC = {r:103, g:154, b:24};
    }
    else if (c < 0.8)
    {
        newC = {r:65, g:126, b:0};
    }
    else if (c < 0.9)
    {
        newC = {r:35, g:35, b:35};
    }
    else
    {
        
        newC = {r: 60, g:60, b:60};
    }
    return newC;
}
function autoUpdate()
{
    console.log("1")
}
function generateTerrain(l1, l2, l3, el)
{
    mapGraphics.strokeWeight(1);
    noiseSeed(round(random(1000)));
    for (var y = 0; y < height; y++)
    {
        for(var x = 0; x < width; x++)
        {
            var usedX = x * 0.03;
            var usedY = y * 0.03;
            var noiseValue = pow((l1 * noise(1 * usedX, 1 * usedY)) + (l2 * noise(2 * usedX, 2 * usedY)) + (l3 * noise(4 * usedX, 2 * usedY)), el);
            var c = getColor(noiseValue);
            mapGraphics.stroke(c.r, c.g, c.b);
            mapGraphics.point(x, y);
        }
    }

}
function draw()
{
    image(mapGraphics, 0, 0);

}
