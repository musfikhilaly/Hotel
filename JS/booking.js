// This function runs when the user clicks "Book Now"
function submitBooking() {

  // Get what the user typed in each field
  var title = document.getElementById("title").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var roomType = document.getElementById("roomType").value;
  var checkIn = document.getElementById("checkIn").value;
  var checkOut = document.getElementById("checkOut").value;

  // Check if any field is empty
  // If empty, show an alert and stop the function
  if (title == "" || firstName == "" || lastName == "" || email == "" || phone == "" || roomType == "" || checkIn == "" || checkOut == "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Hide the form
  document.getElementById("bookingForm").style.display = "none";

  // Show the confirmation message
  document.getElementById("confirmationMessage").style.display = "block";

  // Write the booking details inside the confirmation message
  document.getElementById("confirmationText").innerHTML =
    "Thank you for your booking, " + title + ". " + lastName + "!<br><br>" +
    "<strong>Name:</strong> " + firstName + " " + lastName + "<br>" +
    "<strong>Email:</strong> " + email + "<br>" +
    "<strong>Phone:</strong> " + phone + "<br>" +
    "<strong>Room:</strong> " + roomType + "<br>" +
    "<strong>Check-in:</strong> " + checkIn + "<br>" +
    "<strong>Check-out:</strong> " + checkOut;

}