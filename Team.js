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

sr.reveal('.team', {delay:100, origin:'top'});
sr.reveal('team-box', {delay:100, origin:'top'});
