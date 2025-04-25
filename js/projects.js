// Project dropdown functionality
document.addEventListener("DOMContentLoaded", () => {
  const projectTitles = document.querySelectorAll(".project-title");
  projectTitles.forEach((title) => {
    title.addEventListener("click", () => {
      title.classList.toggle("active");
      const content = title.nextElementSibling;
      content.classList.toggle("show");
    });
  });

  // Show the first project by default
  const projectSection = document.querySelector("#projects");

  if (projectSection) {
    const firstProjectTitle = projectSection.querySelector(".project-title");
    if (firstProjectTitle) {
      firstProjectTitle.classList.add("active");
      firstProjectTitle.nextElementSibling.classList.add("show");
    }
  }
});
