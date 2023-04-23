let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");

const toggle = ()=> profileDropdownList.classList.toggle("active");


window.addEventListener("click", function (e)  {
   if (!btn.contains(e.target)) profileDropdownList.classList.remove("active");
});

const sr = ScrollReveal (
   {
      distance: '65px',
      duration: 2600,
      delay: 450,
      reset: true
   }
);

sr.reveal('.men-text', {delay:200, origin:'top'});
sr.reveal('p', {delay:200, origin:'top'});
sr.reveal('.main_image', {delay:450, origin:'top'});
sr.reveal('.main-btn', {delay:200, origin:'top'});