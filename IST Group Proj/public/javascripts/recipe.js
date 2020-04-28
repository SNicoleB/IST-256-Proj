$.ajax({
  type:"get",
  url:"http://127.0.0.1:3000/recipes",
  success: function(data){
    console.log("Successful GET response!")
    console.log(data);
  }
});

$(document).ready(function(){
  loadRecipeList();
});

function loadRecipeList(){
  $.ajax({
    url:"http://127.0.0.1:3000/recipes",
    success: function(data){
      // var recipeList = document.getElementById("recipeList");
      // if (recipeList)
      // {
      //   while(recipeList.firstChild)
      //   {
      //     recipeList.removeChild(recipeList.firstChild);
      //   }
      // }
      //new block
      // for (var i = 0; i < data.length; i++)
      // {
      //   var recipeName = data[i].name;
      //   var recipeIngr = data[i].ingredients;
      //   var li = document.createElement("li");
      //   li.appendChild(document.createTextNode("Recipe Name: " + recipeName + " Ingredients: " + recipeIngr));
      //   recipeList.appendChild(li);
      // }
    }
    ,
    error: function(data){
      alert("error" + data.error);
    }
  });
};

$(document).ready(function(){
  $("#submit").click(function(e){
    var formname = $("#recipeName").val();
    var formIngredients = $("#recipeIngr").val();
    e.preventDefault();
    var data = {};
    data.recipeName = formname;
    data.recipeIngr = formIngredients;
    console.log("Data Values are: " + data.recipeName + " and " + data.recipeIngr);
      $.ajax({
        type:"POST",
        data: JSON.stringify(data),
        contentType: "application/json",
        url: "http://127.0.0.1:3000/recipes",
        success: function(data){
          loadRecipeList();
          document.getElementById("recipeForm").reset();
        },
        error: function(data){
          alert("error" + data.error);
        }
      });
  });
});
