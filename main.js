Webcam.set({
width:350 , 
height: 300 , 
image_format:'png',
png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takephoto() {
Webcam.snap(function(data_url) {
document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_url+'"/>';
});
}

console.log('m15 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/66T25jfk5/model.json',modelloaded)

function modelloaded(){
console.log ("model loaded succsessfully")
}

function check(){
img= document.getElementById ('captured_image')
classifier.classify(img, gotresult);
}

function gotresult(error,result){
    if(error){
        console.log(error)
    }
    else{
    console.log(result)
    document.getElementById("objectname").innerHTML=result[0].label
    document.getElementById("objectaccuracy").innerHTML=result[0].confidence.toFixed(3)
    }
}