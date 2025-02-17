/* 1. القائمة الجانبية للموبايل */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show-nav");
});

/* 2. التحقق من نموذج التواصل */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (name === "" || email === "" || message === "") {
    formStatus.textContent = "فضلاً عبي كل الحقول.";
    formStatus.style.color = "red";
  } else {
    // هنا ممكن تضيف أي كود لإرسال البيانات للسيرفر أو API
    formStatus.textContent = "تم إرسال رسالتك بنجاح! شكرًا لك.";
    formStatus.style.color = "#ff5722";
    contactForm.reset();
  }
});
