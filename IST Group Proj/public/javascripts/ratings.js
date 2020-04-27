// when user clicks button, toggle between hiding and showing dropdown content //
function dropDown() {
  document.getElementById("locationDropdown").classList.toggle("show");
};

//close dropdown if someone clicks outside of it
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

//display results when option clicked, hide previous results//
function displayLResults1() {
  document.getElementById("searchResultsID1").classList.remove("searchResults");
  document.getElementById("searchResultsID1").classList.add("showDisplayResults");
  document.getElementById("searchResultsID2").classList.add("searchResults");
  document.getElementById("searchResultsID3").classList.add("searchResults");
  document.getElementById("searchResultsID4").classList.add("searchResults");
  document.getElementById("searchResultsID5").classList.add("searchResults");
}

function displayLResults2() {
  document.getElementById("searchResultsID2").classList.remove("searchResults");
  document.getElementById("searchResultsID2").classList.add("showDisplayResults");
  document.getElementById("searchResultsID1").classList.add("searchResults");
  document.getElementById("searchResultsID3").classList.add("searchResults");
  document.getElementById("searchResultsID4").classList.add("searchResults");
  document.getElementById("searchResultsID5").classList.add("searchResults");
}

function displayLResults3() {
  document.getElementById("searchResultsID3").classList.remove("searchResults");
  document.getElementById("searchResultsID3").classList.add("showDisplayResults");
  document.getElementById("searchResultsID2").classList.add("searchResults");
  document.getElementById("searchResultsID1").classList.add("searchResults");
  document.getElementById("searchResultsID4").classList.add("searchResults");
  document.getElementById("searchResultsID5").classList.add("searchResults");
}

function displayLResults4() {
  document.getElementById("searchResultsID4").classList.remove("searchResults");
  document.getElementById("searchResultsID4").classList.add("showDisplayResults");
  document.getElementById("searchResultsID2").classList.add("searchResults");
  document.getElementById("searchResultsID3").classList.add("searchResults");
  document.getElementById("searchResultsID1").classList.add("searchResults");
  document.getElementById("searchResultsID5").classList.add("searchResults");
}

function displayLResults5() {
  document.getElementById("searchResultsID5").classList.remove("searchResults");
  document.getElementById("searchResultsID5").classList.add("showDisplayResults");
  document.getElementById("searchResultsID2").classList.add("searchResults");
  document.getElementById("searchResultsID3").classList.add("searchResults");
  document.getElementById("searchResultsID4").classList.add("searchResults");
  document.getElementById("searchResultsID1").classList.add("searchResults");
}
