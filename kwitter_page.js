//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDGe8JrDCG8jcVe4V10eGjvASbUvbtSPks",
      authDomain: "kwitter-6c8c4.firebaseapp.com",
      databaseURL: "https://kwitter-6c8c4-default-rtdb.firebaseio.com",
      projectId: "kwitter-6c8c4",
      storageBucket: "kwitter-6c8c4.appspot.com",
      messagingSenderId: "712662314585",
      appId: "1:712662314585:web:f249cbe084d525772d8b48"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send ()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
