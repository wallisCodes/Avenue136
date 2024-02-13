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
  var i, x, serviceTabs;
  x = document.getElementsByClassName("services-list");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  serviceTabs = document.getElementsByClassName("service-tab");
  for (i = 0; i < x.length; i++) {
    serviceTabs[i].className = serviceTabs[i].className.replace(" active-tab", "");
  }
  document.getElementById(serviceType).style.display = "block";
  evt.currentTarget.className += " active-tab";
}



// =============== GALLERY ===============
const prevButton = document.querySelector("prev-btn");
const nextButton = document.querySelector("next-btn");
const galleryContainer = document.getElementById("gallery-container");
const galleryImages = document.getElementsByClassName("gallery-img");

var imageIndex = 0; // Keep track of currently displayed image

function prevImage() {
  imageIndex -= 1;

  for (i = 0; i < galleryImages.length; i++) {
    galleryImages[i].className = galleryImages[i].className.replace(" active-img", "");
  }

  if (imageIndex < 0) {
    imageIndex = galleryImages.length - 1;
  }
  galleryImages[imageIndex].className += " active-img";
}

function nextImage() {
  imageIndex += 1;

  for (i = 0; i < galleryImages.length; i++) {
    galleryImages[i].className = galleryImages[i].className.replace(" active-img", "");
  }

  if (imageIndex >= galleryImages.length) {
    imageIndex = 0;
  }
  galleryImages[imageIndex].className += " active-img";
}


// Detecting horizontal swipes to navigate images
var touchstartX = 0
var touchendX = 0
const swipeThreshold = 20;
    
function checkDirection() {
  if (touchendX < touchstartX) {
    nextImage(); //swipe left
  } else if (touchendX > touchstartX) {
    prevImage();
  } 
}

galleryContainer.addEventListener('touchstart', event => {
  // Attempting to only register the swipe if swiping inside the gallery-container
  touchstartX = event.changedTouches[0].screenX;
})

galleryContainer.addEventListener('touchend', event => {
    touchendX = event.changedTouches[0].screenX;
    checkDirection();
})



// =============== CONTACT ===============
// Retrieving current week day to highlight it on the opening times info
const date = new Date();
dayIndex = date.getDay();

var i, openingTimes;
openingTimes = document.getElementsByClassName("opening-info");
for (i = 0; i < openingTimes.length; i++) {
  openingTimes[i].className = openingTimes[i].className.replace(" current-day", "");
}

// Workaround for mismatched indices (Sunday [0] in Date() object vs. Sunday [6] in openingTimes object)
if (dayIndex == 0) {
  dayIndex = 7;
}

openingTimes[dayIndex - 1].className += " current-day";