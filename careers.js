// This function runs when the user clicks Submit Application
function submitCareers() {

  // Get the values from the form
  var title = document.getElementById("title").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Check if all fields are filled in
  if (title == "" || firstName == "" || lastName == "" || email == "" || phone == "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Hide the form
  document.getElementById("careerForm").style.display = "none";

  // Show the thank you message with the person's name
  document.getElementById("thankYouMessage").style.display = "block";
  document.getElementById("thankYouText").innerText = "Thank you for contacting us " + title + ". " + lastName + "!";

}