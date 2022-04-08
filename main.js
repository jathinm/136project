Status = "";
input_text = "";
function setup(){
    canvas = createCanvas(300, 250);
    canvas.position(480, 250);
    video = createCapture(VIDEO);
    video.size(380,290);
    video.hide();
}

function start(){
object_detector = ml5.objectDetector("CoCossd",modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Object";
input_text = document.getElementById("input_id").ariaValueMax;
}

function modelLoaded(){
    console.log("model_loaded");
    Status = true;
}
function draw(){
    image(video,0,0,300,290)
}