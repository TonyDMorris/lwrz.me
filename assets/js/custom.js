// Filter portfolio

const filters = document.querySelectorAll(".filter-btn");

filters.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    let id = filterBtn.getAttribute("id");
    let portfolioCards = document.querySelectorAll(".portfolio-card");
    portfolioCards.forEach((card) => {
      if (card.getAttribute("data-tags").includes(id)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });

    filters.forEach((btn) => btn.classList.remove("active"));
    filterBtn.classList.add("active");
  });
});

let loginForm = document.getElementById("contactForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  

  let first_name = document.getElementById("inputFirstName").value;
  let last_name = document.getElementById("inputLastName").value;
  let email = document.getElementById("inputEmail").value;
  let message = document.getElementById("inputMessage").value;
  let formData = {

      first_name: first_name,
      last_name: last_name,
      email: email,
      message: message

  };

// post data to strapi
const apiUrl = 'https://api.towidomo.dev';



formTitle = document.getElementById("formTitle");
fetch(`${apiUrl}/contact-everteches`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
 // replace with your actual auth token
  },
  body: JSON.stringify(formData),
})
  .then((response) => {
    if (!response.ok) {
     return response.json().then((data) => {
        console.error('Error adding customer event:', data);
      });
     
    }
    formTitle.innerHTML = "Thank you for your message. We will get back to you shortly.";
  })
 
  .catch((error) => {
    console.error('Error adding customer event:', error);
  });
  
loginForm.reset();
loginForm.classList.add("hide");
})