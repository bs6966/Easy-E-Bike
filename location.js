function calculatePrice() {
    var pickupLocation = document.getElementById("pickup-location").value;
    var dropLocation = document.getElementById("drop-location").value;

    // Calculate the fare based on the distance between pickup and drop locations
    // You can replace this calculation with your own fare calculation algorithm
    var fare = Math.abs(dropLocation.charCodeAt(0) - pickupLocation.charCodeAt(0)) * 6;

    document.getElementById("price").innerHTML = "Price: "+ fare+"₹";
  }