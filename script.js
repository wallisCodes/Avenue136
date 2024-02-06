screen.orientation.lock("natural");

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