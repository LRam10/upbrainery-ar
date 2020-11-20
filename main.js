var firebaseConfig = {
    apiKey: "AIzaSyC4X3yyoqqn9BBHbu2IQ17YlFDnWOugfdQ",
    authDomain: "upbraineryar1.firebaseapp.com",
    databaseURL: "https://upbraineryar1.firebaseio.com",
    projectId: "upbraineryar1",
    storageBucket: "upbraineryar1.appspot.com",
    messagingSenderId: "553878858794",
    appId: "1:553878858794:web:b9a36c224ef3ece6dce753",
    measurementId: "G-VZV8BTDFZE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    console.log("ok")
    var storage = firebase.storage();
    var storageRef = storage.ref();

// Create a reference from a Google Cloud Storage URI
    //var gsReference = storage.refFromURL('gs://bucket/models/volcano/scene.gltf');

    storageRef.child('Models/volcano/scene.gltf').getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'

    let volcanoScene = document.getElementById("volcano");
    volcanoScene.setAttribute("gltf-model",`url(${url})`);
    console.log(volcano);
    // Or inserted into an <img> element:
    console.log(url)
  }).catch(function(error) {
    // Handle any errors
  });