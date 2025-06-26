// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const heroLogo = document.querySelector(".hero-logo");
  const body = document.body;

  // Animate logo in
  setTimeout(() => {
    heroLogo.classList.add("show");
  }, 300);

  // Detect scroll and toggle sticky logo
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      body.classList.remove("hide-sticky-logo");
    } else {
      body.classList.add("hide-sticky-logo");
    }
  });

  // Initial state
  body.classList.add("hide-sticky-logo");
});
document.addEventListener("DOMContentLoaded", () => {
    const heroLogo = document.querySelector(".hero-logo");
    const heroName = document.querySelector(".hero-brand-name");
    const body = document.body;
  
    // Animate logo + name into hero on load
    setTimeout(() => {
      heroLogo.classList.add("show");
      heroName.classList.add("show");
    }, 300);
  
    // Scroll handler
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        body.classList.add("scrolled");
      } else {
        body.classList.remove("scrolled");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
      "Calls",
      "X Shillers",
      "Raiders",
      "Upvote",
      "TG Ads"
    ];
    
    const dynamicText = document.getElementById("offer-dynamic");
    let index = 0;
  
    setInterval(() => {
      index = (index + 1) % phrases.length;
      dynamicText.style.opacity = 0;
  
      setTimeout(() => {
        dynamicText.textContent = phrases[index];
        dynamicText.style.opacity = 1;
      }, 300);
    }, 3000); // change every 3s
  });
  
  