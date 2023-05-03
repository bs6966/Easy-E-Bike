const firebaseConfig = {
    apiKey: "AIzaSyDPXkpL6EvEv89r8RSwKV5ktpvzf3j7KXQ",
    authDomain: "easy-e-bike-f2974.firebaseapp.com",
    databaseURL: "https://easy-e-bike-f2974-default-rtdb.firebaseio.com",
    projectId: "easy-e-bike-f2974",
    storageBucket: "easy-e-bike-f2974.appspot.com",
    messagingSenderId: "279931870537",
    appId: "1:279931870537:web:eafd54e89366280032ce98"
  };

  firebase.initializeApp(firebaseConfig);

  var signinDB = firebase.database().ref('easy-e-bike')

  document.getElementById('form').addEventListener('submit',submitForm)

  function submitForm(e) {
    e.preventDefault();
    var email = getElementVal('email')
    var pass = getElementVal('password')
    var phone = getElementVal('phone')
    var reg = getElementVal('message')

    console.log(email,pass,phone,reg)

    saveMessages(email,pass,phone,reg)
    
    document.querySelector('.alert').style.display = "block";

  
  }

  const saveMessages = (email,pass,phone,reg) => {
    var newForm = signinDB.push();
    newForm.set({
      email : email ,
      pass : pass ,
      phone : phone,
      reg : reg
    })
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
