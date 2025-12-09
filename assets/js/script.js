document.addEventListener("DOMContentLoaded", () => {
  // Listing filter buttons
  const filterButtons = document.querySelectorAll(".filter button");
  const cards = document.querySelectorAll("#listingGrid .card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;
      filterButtons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");

      cards.forEach((card) => {
        const isMatch = category === "all" || card.dataset.category === category;
        card.classList.toggle("hidden", !isMatch);
      });
    });
  });

  // Search form (demo)
  const searchForm = document.querySelector(".search");
  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const { location, type, budget } = searchForm;
      const parts = [];
      if (location.value.trim()) parts.push(location.value.trim());
      if (type.value) parts.push(type.value);
      if (budget.value) parts.push(budget.value);
      const message = parts.length
        ? `Filtering for: ${parts.join(" • ")}`
        : "Showing all available listings.";
      alert(message);
    });
  }

  // Contact form
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      formStatus.textContent = "Sending...";
      setTimeout(() => {
        formStatus.textContent = "Thanks! We’ll reach out within 2 hours.";
        contactForm.reset();
      }, 600);
    });
  }
});

