Webcam.attach(camera);
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90

});
function take_snapshot(){
   Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    
  });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/l3Sb3ngl-/model.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');
    
}
function check(){
  console.log("Staring Checking");
  img=document.getElementById("captured_image");
  classifier.classify(img,gotresult);
}
function gotresult(error,results) {
  if(error){
    console.error(error)

  }
  else{
    console.log(results);
    document.getElementById("ObjectName").innerHTML=results[0].label;
    document.getElementById("ObjectAccuracy").innerHTML=results[0].confidence.toFixed(3);
    
  }


  
}