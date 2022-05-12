// ADD YOUR FIREBASE LINKS
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
        user_name = localStorage.getItem("user_name");
        room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
  document.getElementById("img").src = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
           console.log(message_data);
           name = message_data['name'];
           message = message_data['message'];
         like = message_data['like'];
         picture = message_data['img'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
         image = "<img id='image' src='"+picture+"'>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag+image ;
        document.getElementById("output").innerHTML += row;
        document.getElementById("img").src += image.src;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes  
     });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}
function camera() {
  window.location = "camera.html";
}