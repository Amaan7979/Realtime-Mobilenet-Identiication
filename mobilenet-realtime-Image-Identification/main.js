function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  canvas.position(200,200);
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelLoaded);
}
function draw() {
  image(video,0,0,300,300);
  classifier.classify(video,got_results);
}
function modelLoaded() {
  console.log("Model is Loaded");
}
function got_results(error,results) {
if(error) {
console.log(error);
}
else{
  console.log(results);
  document.getElementById("object_name").innerHTML=results[0].label;
  document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
}
}

