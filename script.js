document.addEventListener("DOMContentLoaded", () => {
  if (!("IntersectionObserver" in window)) {
    console.warn("IntersectionObserver not supported.");
    return;
  }

  const observerOptions = { threshold: 0.5 };

  const handleSectionIntersect = (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  };

  const sectionObserver = new IntersectionObserver(
    handleSectionIntersect,
    observerOptions
  );
  document.querySelectorAll(".section").forEach((section) => {
    sectionObserver.observe(section);
  });

  const section7 = document.getElementById("section7");
  const stickyImages = document.querySelectorAll(".sticky-img");
  const newImage = document.querySelector(".new-img");

  const handleImageIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        stickyImages.forEach((img) => (img.style.opacity = "0"));
        newImage.style.opacity = "1";
      } else {
        stickyImages.forEach((img) => (img.style.opacity = "1"));
        newImage.style.opacity = "0";
      }
    });
  };

  if (section7 && stickyImages.length && newImage) {
    const imageObserver = new IntersectionObserver(
      handleImageIntersect,
      observerOptions
    );
    imageObserver.observe(section7);
  }
});
