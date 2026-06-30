// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const form = this;
      const data = new FormData(form);

      // Get language-aware error message
      function getErrorMsg(serverMsg) {
        const lang = localStorage.getItem("lang") || "en";
        if (lang === "de") {
          return serverMsg || "Beim Absenden deiner Nachricht ist ein Fehler aufgetreten.";
        }
        return serverMsg || "Oops! There was a problem submitting your form";
      }

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
              alert(getErrorMsg(data.error));
            });
          }
        })
        .catch(function () {
          alert(getErrorMsg(null));
        });
    });
  }
});
