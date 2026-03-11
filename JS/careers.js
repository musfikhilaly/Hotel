// This function runs when the user clicks "Submit Application"
function submitCareers() {

  // Get what the user typed in each field
  var title = document.getElementById("title").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Check if any field is empty
  // If empty, show an alert and stop the function
  if (title == "" || firstName == "" || lastName == "" || email == "" || phone == "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Hide the form
  document.getElementById("careerForm").style.display = "none";

  // Show the thank you message
  document.getElementById("thankYouMessage").style.display = "block";

  // Write the person's name inside the thank you message
  document.getElementById("thankYouText").innerText = "Thank you for contacting us " + title + ". " + lastName + "!";

}