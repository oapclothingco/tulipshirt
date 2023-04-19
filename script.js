// Define an array of testimonials
const testimonials = [
{
name: "John Doe",
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit urna eget magna blandit, id venenatis urna blandit."
},
{
name: "Jane Smith",
text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In euismod commodo metus, nec sollicitudin turpis iaculis eget."
},
{
name: "Bob Johnson",
text: "Nulla facilisi. Nullam sed blandit tortor, non interdum metus. Suspendisse consectetur est sit amet ex vestibulum, a venenatis dolor facilisis."
}
];

// Get the "Leave a Review" button element
const leaveReviewBtn = document.getElementById("leave-review-btn");

// Add an event listener to the button
leaveReviewBtn.addEventListener("click", function() {
// Get the div that will contain the form
const formContainer = document.getElementById("review-form-container");

// Create the form elements
const form = document.createElement("form");
const nameInput = document.createElement("input");
const reviewInput = document.createElement("textarea");
const submitBtn = document.createElement("button");

// Set the attributes for the form elements
form.setAttribute("id", "review-form");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "name-input");
nameInput.setAttribute("placeholder", "Enter your name");
reviewInput.setAttribute("id", "review-input");
reviewInput.setAttribute("placeholder", "Enter your review");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("id", "submit-review-btn");
submitBtn.textContent = "Submit";

// Append the form elements to the form and the form to the container
form.appendChild(nameInput);
form.appendChild(reviewInput);
form.appendChild(submitBtn);
formContainer.appendChild(form);

// Remove the button from the container
formContainer.removeChild(leaveReviewBtn);
});
