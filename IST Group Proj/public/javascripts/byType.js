// when user clicks button, toggle between hiding and showing dropdown content //
function dropDown() {
  document.getElementById("typeDropdown").classList.toggle("show");
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

$.ajax({
  type:"get",
  url:"https://developers.zomato.com/api/v2.1/categories",
  headers: {
    'user-key': "7749b19667964b87a3efc739e254ada2",
  },
  success: function(data){
    console.log(data);
  }
});
/* references for how to integrate api key:
https://stackoverflow.com/questions/45261255/how-to-use-an-api-key-for-an-ajax-call
https://stackoverflow.com/questions/3258645/pass-request-headers-in-a-jquery-ajax-get-call*/

function displayDResults() {
  document.getElementById("deliveryResultsID").classList.remove("deliveryResults");
  document.getElementById("deliveryResultsID").classList.add("show");
}

/*
$.ajax({
  type:"get",
  url:"https://developers.zomato.com/api/v2.1/categories/delivery",
  success: function(data){
      console.log(data.categories[1].categories);
  }
});
*/
