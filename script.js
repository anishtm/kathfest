window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    // header.classList.toggle('sticky', window.scrollY > 0);
  });

// Smooth scrolling for navigation links
// document.addEventListener("DOMContentLoaded", function () {
//     // Add a click event listener to all navigation links
//     document.querySelectorAll("nav a").forEach(function (anchor) {
//         anchor.addEventListener("click", function (e) {
//             e.preventDefault();

//             // Get the target section based on the href attribute
//             const targetSectionId = this.getAttribute("href").substring(1);
//             const targetSection = document.getElementById(targetSectionId);

//             // Calculate the offset, considering the fixed header
//             const offset = targetSection.offsetTop - document.querySelector("header.sticky").offsetHeight + 158;

//             // Scroll to the target section with smooth behavior
//             window.scrollTo({
//                 top: offset,
//                 behavior: "smooth",
//             });
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    // Add a click event listener to all navigation links
    document.querySelectorAll("nav a").forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            // Get the target section based on the href attribute
            const targetSectionId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetSectionId);

            // Manually set the offset value (adjust this value as needed)
            const manualOffset = -20; // Change this to your desired offset

            // Scroll to the target section with smooth behavior
            window.scrollTo({
                top: targetSection.offsetTop - manualOffset,
                behavior: "smooth",
            });
        });
    });
});