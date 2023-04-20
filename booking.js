const paymentForm = document.getElementById("payment-form");
const thankYou = document.getElementById("thank-you");

paymentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  thankYou.style.display = "block";
  paymentForm.style.display = "none";
});
