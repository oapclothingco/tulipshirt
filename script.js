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
    text: "Nulla facilisi. Suspendisse maximus imperdiet eros, ac gravida justo vestibulum id. Aenean eleifend felis a nibh rhoncus pharetra."
  }
];

// Get the button element
const button = document.querySelector("#show-testimonials");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Create the pop-up window
  const popup = window.open("", "Testimonials", "width=600,height=400");

  // Create the HTML content for the pop-up window
  const content = `
    <h2>Testimonials</h2>
    <ul>
      ${testimonials.map(testimonial => `<li><strong>${testimonial.name}:</strong> ${testimonial.text}</li>`).join('')}
    </ul>
  `;

  // Add the content to the pop-up window
  popup.document.body.innerHTML = content;
});
