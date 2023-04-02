let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");

const toggle = ()=> profileDropdownList.classList.toggle("active");


window.addEventListener("click", function (e)  {
   if (!btn.contains(e.target)) profileDropdownList.classList.remove("active");
});