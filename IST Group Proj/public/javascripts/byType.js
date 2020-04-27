// when user clicks button, toggle between hiding and showing dropdown content //
function dropDown() {
  var cats;
  $.ajax({
    type:"get",
    async: false,
    url:"https://developers.zomato.com/api/v2.1/categories",
    headers: {
      'user-key': "7749b19667964b87a3efc739e254ada2",
    },
    success: function(data){
      cats = data.categories;
    }
  });
/* references for how to integrate api key:
https://stackoverflow.com/questions/45261255/how-to-use-an-api-key-for-an-ajax-call
https://stackoverflow.com/questions/3258645/pass-request-headers-in-a-jquery-ajax-get-call*/

  $.each(cats, function(index, value){
    $('#option' + (index + 1)).text(value.categories.name);
    $('#option' + (index + 1)).data('catID', value.categories.id);
  });

  document.getElementById("typeDropdown").classList.toggle("show");
}

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


//display results when option clicked//
function displayDResults(elementID) {
  document.getElementById("deliveryResultsID").classList.remove("deliveryResults");
  document.getElementById("deliveryResultsID").classList.add("showDisplayResults");
  var catID = $("#" + elementID).data('catID');

  var rests;
  $.ajax({
    type:"get",
    async: false,
    url:"https://developers.zomato.com/api/v2.1/search?category=" + catID + "&count=10",
    headers: {
      'user-key': "7749b19667964b87a3efc739e254ada2",
    },
    success: function(data){
      rests = data.restaurants;
    }
  });

  var restNames = "";
  $.each(rests, function(index, value){
    restNames = restNames + "\r\n" + value.restaurant.name;
  });
  /* reference for carriage return line feed:
  https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent */

  $('#deliveryResultsID').text(restNames);
}
