screen.orientation.lock("natural"); // attemping to disable screen rotation (doesn't work)

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


// Retrieving current week day to highlight it on the opening times info
const date = new Date();
day_index = date.getDay();

var i, opening_times;
opening_times = document.getElementsByClassName("opening-info");
for (i = 0; i < opening_times.length; i++) {
  opening_times[i].className = opening_times[i].className.replace(" current-day", "");
}

// workaround for mismatched indices (Sunday [0] in Date() object vs. Sunday [6] in opening_times object)
if (day_index == 0) {
  day_index = 7;
}

opening_times[day_index - 1].className += " current-day";