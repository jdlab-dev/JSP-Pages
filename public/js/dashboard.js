let profile_page = document.getElementById("profile_page");
let screening_page = document.getElementById("screening_page");
let credential_page = document.getElementById("credential_page");
let payment_page = document.getElementById("payment_page");
let fsubmission_page = document.getElementById("fsubmission_page");
let help_page = document.getElementById("help_page");
let imageText = document.getElementById("imageBase");
const profile = document.getElementById("profile");
const screening = document.getElementById("screening");
const credential = document.getElementById("credential");
const payment = document.getElementById("payment");
const submission = document.getElementById("submission");
const help = document.getElementById("help");
const uploadCanvas = document.getElementById('uploadCanvas');

//const uploadImage = document.getElementById("uploadImage");

profile_page.style.display = 'none';
screening_page.style.display = 'none';
credential_page.style.display = 'none';
payment_page.style.display = 'none';
fsubmission_page.style.display = 'none';
help_page.style.display = 'none';


function readFile() {

  if (this.files && this.files[0]) {

    var FR= new FileReader();

    FR.addEventListener("load", function(e) {
      //document.getElementById("uploadedPhoto").src = e.target.result;
      let image = e.target.result.substring(22);
      imageText.setAttribute('value', image);
    });

    FR.readAsDataURL( this.files[0] );
  }

}

document.getElementById("image").addEventListener("change", readFile);


/*
imageUploadInput.addEventListener('change', () => {
  // Get File Extension
  let ext = imageUploadInput.files[0]['name'].substring(imageUploadInput.files[0]['name'].lastIndexOf('.') + 1).toLowerCase();
  // If File Exists & Image
    if (imageUploadInput.files && imageUploadInput.files[0] && (ext == "png" || ext == "jpeg" || ext == "jpg")) {
      startUpload(imageUploadInput.files[0]);
    }else {
      //window.location.assign('/student/dashboard');
    }
});

const startUpload = (file) => {
// File or Blob named mountains.jpg
//var file = "..."

// Create the file metadata
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();
var metadata = {
  contentType: 'image/jpeg'
};


var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      console.log(error);
      break;

    case 'storage/canceled':
      // User canceled the upload
      console.log(error);
      break;

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      console.log(error);
      break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
    const url = downloadURL;
    document.getElementById("fileUrl").innerHTML = url
    document.getElementById("upload").src = "'"+ url +"'";
    //window.location.assign('/student/dashboard');
  });
});
}
*/
profile.addEventListener('click', () => {
  profile_page.style.display = 'block';
  screening_page.style.display = 'none';
  credential_page.style.display = 'none';
  payment_page.style.display = 'none';
  fsubmission_page.style.display = 'none';
  help_page.style.display = 'none';
});

screening.addEventListener('click', () => {
screening_page.style.display = 'block';
  profile_page.style.display = 'none';
  credential_page.style.display = 'none';
  payment_page.style.display = 'none';
  fsubmission_page.style.display = 'none';
  help_page.style.display = 'none';
});

credential.addEventListener('click', () => {
credential_page.style.display = 'block';
  profile_page.style.display = 'none';
  screening_page.style.display = 'none';
  payment_page.style.display = 'none';
  fsubmission_page.style.display = 'none';
  help_page.style.display = 'none';
});

payment.addEventListener('click', () => {
payment_page.style.display = 'block';
credential_page.style.display = 'none';
  profile_page.style.display = 'none';
  screening_page.style.display = 'none';
  fsubmission_page.style.display = 'none';
  help_page.style.display = 'none';
});

submission.addEventListener('click', () => {
fsubmission_page.style.display = 'block';
payment_page.style.display = 'none';
credential_page.style.display = 'none';
  profile_page.style.display = 'none';
  screening_page.style.display = 'none';
  help_page.style.display = 'none';
});

help.addEventListener('click', () => {
help_page.style.display = 'block';
fsubmission_page.style.display = 'none';
payment_page.style.display = 'none';
credential_page.style.display = 'none';
  profile_page.style.display = 'none';
  screening_page.style.display = 'none';
});
