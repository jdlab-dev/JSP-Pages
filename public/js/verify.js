document.addEventListener("DOMContentLoaded", function() {
  let video = document.getElementById('video'),
captureCanvas = document.getElementById('captureCanvas'),
uploadCanvas = document.getElementById('uploadCanvas'),
captureContext = captureCanvas.getContext('2d'),
uploadContext = uploadCanvas.getContext('2d'),
uploadedPhoto = document.getElementById('uploadedPhoto'),
capturedPhoto = document.getElementById('capturedPhoto'),
matchText = document.getElementById('matchText');


if(navigator.mediaDevices.getUserMedia){
  navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    video.srcObject = stream;
  }).catch(function(error) {
    console.log(error)
  })
}



document.getElementById('capture').addEventListener('click', function(){
  setImageToCanvas(video, capturedPhoto, captureCanvas, captureContext, video.videoWidth, video.videoHeight);
  // Get Base64
  var image1 = captureCanvas.toDataURL().split(',')[1];
  matchText.setAttribute('value', image1);
})


// Set Photo To Canvas Function
function setImageToCanvas(image, id, canvas, context, width=image.width, height=image.height) {
  var ratio = width / height;
  var newWidth = canvas.width;
  var newHeight = newWidth / ratio;
  if (newHeight > canvas.height) {
    newHeight = canvas.height;
    newWidth = newHeight * ratio;
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0, newWidth, newHeight);
  id.setAttribute('src', canvas.toDataURL('image/png'));
}


})
