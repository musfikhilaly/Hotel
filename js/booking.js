// This function runs when the user clicks "Book Now"
function submitBooking() {

  // Get what the user typed in each field
  let title = document.getElementById("title").value;
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let roomType = document.getElementById("roomType").value;
  let checkIn = document.getElementById("checkIn").value;
  let checkOut = document.getElementById("checkOut").value;

  // Check if any field is empty
  // If empty, show an alert and stop the function
  if (title == "" || firstName == "" || lastName == "" || email == "" || phone == "" || roomType == "" || checkIn == "" || checkOut == "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Hide the title, description and line
  document.getElementById("bookingTitle").style.display = "none";
  document.getElementById("bookingDescription").style.display = "none";
  document.getElementById("bookingLine").style.display = "none";

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