function preload(){

};
var nose_X;
var nose_Y;
var left_wrist_X;
var right_wrist_x;
var actul_size;
function setup(){
    video=createCapture(VIDEO);
    video.size(500 ,500);
Canvas = createCanvas(500 ,500);
Canvas.position(530 ,230);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
};
function draw(){
background("#0cf21f");
fill("#2514e0");
stroke("#c912e6")
square(nose_X ,nose_Y ,actul_size);
};
function modelLoaded(){
    console.log("Model is loaded!");
    };
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_X= results[0].pose.nose.x;
        nose_Y= results[0].pose.nose.y;
        left_wrist_X= results[0].pose.leftWrist.x;
        right_wrist_x= results[0].pose.rightWrist.x;
        console.log("noseX =" + nose_Y,"noseY =" + nose_X,"left_wrist_x =" + left_wrist_X,"right_wrist_x =" + right_wrist_x);
        actul_size=floor(left_wrist_X - right_wrist_x);
        console.log(actul_size);
        document.getElementById("size").innerHTML=actul_size;
    };
};