function preload(){

};
function setup(){
    video=createCapture(VIDEO);
    video.size(500 ,500);
Canvas = createCanvas(500 ,500);
Canvas.position(530 ,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
};
function draw(){
background("#0cf21f")
};
function modelLoaded(){
    console.log("Model is loaded!");
    };
function gotPoses(results){
console.log(results);
};