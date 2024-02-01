// Buat form
const form = document.getElementById("contactForm");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const name = inputName.value.trim();
  const email = inputEmail.value.trim();
  const message = inputMessage.value.trim();

  // Mereset Validasi
  document.querySelectorAll(".error").forEach((error) => {
    error.textContent = "";
  });

  let hasError = false;

  if (name === "") {
    document.getElementById("name-error").textContent = "Name is required!";
    hasError = true;
  }

  if (email === "") {
    document.getElementById("email-error").textContent = "Email is required";
    hasError = true;
  } else if (!isValidEmail(email)) {
    document.getElementById("email-error").textContent = "Invalid email format";
    hasError = true;
  }

  if (message === "") {
    document.getElementById("message-error").textContent =
      "Message is required";
    hasError = true;
  }

  if (!hasError) {
    alert("Bagus, pesan kamu terkirim tunggu respon kami yaa:)");
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Navbar Hamburger
document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
  });


  // Auto slide

  let slideIndex = 0;
    showSlides();

    function showSlides() {
      let slides = document.getElementsByClassName("slide");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000); // Ubah gambar setiap 3 detik
    }
