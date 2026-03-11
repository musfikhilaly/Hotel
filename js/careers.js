// This function runs when the user clicks "Submit Application"
function submitCareers() {

  // Get what the user typed in each field
  let title = document.getElementById("title").value;
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

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
