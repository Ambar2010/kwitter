
Webcam.set({
    width:400,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("results").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxJpGTLqNJa-UXVrvBFfcceCXVgSyLqNE",
    authDomain: "kwitter-945ca.firebaseapp.com",
    databaseURL: "https://kwitter-945ca-default-rtdb.firebaseio.com",
    projectId: "kwitter-945ca",
    storageBucket: "kwitter-945ca.appspot.com",
    messagingSenderId: "230399701369",
    appId: "1:230399701369:web:d94c0c66f725c054bd3fa8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function sendImage() {
    window.location = "kwitter_page.html";
    image = document.getElementById("selfie_image").src;
    firebase.database().ref(room_name).push({
        img:image
       });
}