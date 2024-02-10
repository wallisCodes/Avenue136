// =============== NAVIGATION ===============
// Relevant hamburger menu elements
const primaryNav = document.querySelector(".primary-navigation");
const hamburgerButton = document.querySelector(".hamburger-button");
const openNavIcon = document.querySelector(".open-nav");
const closeNavIcon = document.querySelector(".close-nav");
const navLinks = document.getElementsByClassName("nav-link");


function openNavMenu() {
  primaryNav.setAttribute("data-visible", true);
  hamburgerButton.setAttribute("aria-expanded", true);

  // Disable scrolling when the nav menu is expanded
  document.body.style.overflowY = "hidden";

  // Decided against nested css to switch hamburger icons due to only ~80% browser support
  closeNavIcon.style.display = "block"; 
  openNavIcon.style.display = "none";
}; 


function closeNavMenu() {
  primaryNav.setAttribute("data-visible", false);
    hamburgerButton.setAttribute("aria-expanded", false);

    // Re-enable scrolling when the nav menu is collapsed
    document.body.style.overflowY = "visible";

    // Decided against nested css to switch hamburger icons due to only ~80% browser support
    closeNavIcon.style.display = "none";
    openNavIcon.style.display = "block";
}


// Close the menu when clicking outside of it (provided it was open)
document.body.addEventListener("click", function (event) {
  if (!event.target.matches(".primary-navigation") && primaryNav.getAttribute("data-visible") === "true") {
    closeNavMenu();
    }
});


// Close the menu when navigating to a different section
for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    closeNavMenu();
  });
}


// Toggle the menu depending on it's current state
hamburgerButton.addEventListener("click", (event) => {
  const isVisible = primaryNav.getAttribute("data-visible");

  // Crucial to prevent menu open click event from triggering the document.body click event listener closing the nav menu instantly
  event.stopPropagation();

  isVisible === "false" ? openNavMenu() : closeNavMenu();
});



// =============== SERVICES ===============
// Function to switch the display between the two service menus via the service tabs
function switchService(evt, serviceType) {
  var i, x, service_tabs;
  x = document.getElementsByClassName("services-list");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  service_tabs = document.getElementsByClassName("service-tab");
  for (i = 0; i < x.length; i++) {
    service_tabs[i].className = service_tabs[i].className.replace(" active-tab", "");
  }
  document.getElementById(serviceType).style.display = "block";
  evt.currentTarget.className += " active-tab";
}



// =============== CONTACT ===============
// Retrieving current week day to highlight it on the opening times info
const date = new Date();
day_index = date.getDay();

var i, opening_times;
opening_times = document.getElementsByClassName("opening-info");
for (i = 0; i < opening_times.length; i++) {
  opening_times[i].className = opening_times[i].className.replace(" current-day", "");
}

// Workaround for mismatched indices (Sunday [0] in Date() object vs. Sunday [6] in opening_times object)
if (day_index == 0) {
  day_index = 7;
}

opening_times[day_index - 1].className += " current-day";