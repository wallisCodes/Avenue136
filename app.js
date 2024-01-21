function resizeServicePhoto() {
  //Trying to calculate heights of each menu container to set gallery image to same height
  service_menu = document.getElementById("service-menu");
  menu_height = service_menu.offsetHeight; //height in pixels of menu content + padding + border
  // console.log("Height of box = " + menu_height + " pixels.");

  haircut_photo_lg = document.getElementById("service-photo");
  haircut_photo_lg.style.height = menu_height + "px";
  // console.log("Height of photo = " + haircut_photo_lg.offsetHeight + " pixels.");
}



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

  // resizeServicePhoto();
}

resizeServicePhoto();