// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const form = this;
      const data = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      })
        .then(function (response) {
          if (response.ok) {
            document.getElementById("success-message").style.display = "block";
            form.reset();
          } else {
            response.json().then(function (data) {
              alert(
                data.error || "Oops! There was a problem submitting your form",
              );
            });
          }
        })
        .catch(function (error) {
          alert("Oops! There was a problem submitting your form");
        });
    });
  }
});
