// when user clicks button, toggle between hiding and showing dropdown content //
function dropDown() {
  document.getElementById("cheapestDropdown").classList.toggle("show");
}

//close dropdown if someone clicks outside of it//
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// credit for dropdown code to w3schools //
