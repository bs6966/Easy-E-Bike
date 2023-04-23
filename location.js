function calculatePrice() {
  var pickupLocation = document.getElementById("pickup-location").value.substr(0, 5);
  var dropLocation = document.getElementById("drop-location").value.substr(0, 5);

  // Calculate the fare based on the distance between the first 5 letters of pickup and drop locations
  // You can replace this calculation with your own fare calculation algorithm
  var fare = Math.abs(dropLocation.charCodeAt(0) - pickupLocation.charCodeAt(0)) * 6; 

  if(dropLocation.charCodeAt(0)===pickupLocation.charCodeAt(0)){
    fare = Math.abs(dropLocation.charCodeAt(4) - pickupLocation.charCodeAt(4)) * 6; 
    document.getElementById("price").innerHTML = "Price: "+ fare+"₹";
  }
  else if((dropLocation=="abode-valley" && pickup-location=="potheri-market") ) {
    document.getElementById("price").innerHTML = "Price: "+ 5+"₹";
  }
  else {
    document.getElementById("price").innerHTML = "Price: "+ fare+"₹";
  }
  
}