var config = {
    apiKey: "AIzaSyC9TlsXI9552M2N9KAPRD3z2ptKhdDsqCo",
    authDomain: "my-portfolio-f1a89.firebaseapp.com",
    databaseURL: "https://my-portfolio-f1a89.firebaseio.com",
    projectId: "my-portfolio-f1a89",
    storageBucket: "my-portfolio-f1a89.appspot.com",
    messagingSenderId: "894256465971",
    appId: "1:894256465971:web:063bbc5bfba9f087b7bb46",
    measurementId: "G-82VH0562JQ"
  };
  // Initialize Firebase
  var app = firebase.initializeApp(config);
  var db = firebase.firestore(app);
    firebase.analytics();

  
  document.getElementById('button').addEventListener('click',()=>{
    let fname=document.getElementById('fname');
    let lname=document.getElementById('lname');
    let email=document.getElementById('email');
    let subject=document.getElementById('subject');
    let message=document.getElementById('message');

    if(fname.value=="" || lname.value==""){
      alert('Please enter your name');
      fname.focus();
    }
    else if(email.value==""){
      alert('Please enter your email');
      email.focus();
    }
    else if(subject.value=="" || message.value==""){
      alert('Please enter subject or message.')
    }else{
        alert('Thankyou! Will contact you soon');
        db.collection('query').add({
            fname:fname.value,
            lname:lname.value,
            email:email.value,
            sub:subject.value,
            msg:message.value
    })
      // console.log("Document written with ID: ", docRef.id.fname); .then((docRef)=>{})
    }
  })