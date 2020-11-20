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
    //reference for 3d model
    var storageRef = storage.ref();
    //reference for patt
    var pattRef = storage.ref();

    pattRef.child('Patterns/volcano/pattern-volcanov2.patt').getDownloadURL().then(function(url){
      let markerVolcano = document.getElementById('markerVolcano');
      markerVolcano.setAttribute('url',url);
    }).catch(function(error){
      console.log(error);
    });

    storageRef.child('Models/volcano/volcano.glb').getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'

    let volcanoScene = document.getElementById("volcano");
    volcanoScene.setAttribute("gltf-model",`url(${url})`);
    // Or inserted into an <img> element:
  }).catch(function(error) {
    // Handle any errors
  });