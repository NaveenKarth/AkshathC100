var firebaseConfig = {
    apiKey: "AIzaSyAxmF1fNB4nHnmQ7MUH1sHJXPJq5fpNlbc",
    authDomain: "kwitter-ac7bd.firebaseapp.com",
    databaseURL: "https://kwitter-ac7bd-default-rtdb.firebaseio.com",
    projectId: "kwitter-ac7bd",
    storageBucket: "kwitter-ac7bd.appspot.com",
    messagingSenderId: "358270789895",
    appId: "1:358270789895:web:3fcfd94e5c8d996773fda2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
   localStorage.setItem("user_name", user_name);
   window.location = "chat_room.html";
}



