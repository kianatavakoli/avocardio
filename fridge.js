
function fetchJSON(path, callback) {
    var httpRequest = new XMLHttpRequest();
    var key = "baedfb170bf244198a66b2b5c76dcc7d"

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.setRequestHeader('Authorization', key);
    httpRequest.send();
}
var apple = 0;
var berries = 0;
var avocado = 0;
var leafy_greens = 0;
var tropical_exotic = 0;
var citrus = 0;
var root = 0;
var stone_fruits = 0;
var melons = 0;
var marrow = 0;


function user(choice){

    if (choice == "apple"){
      var apple = 1;
      console.log(apple);
    }
    if (choice == "berries"){
      var berries = 1;
      console.log(berries);
    }
    if (choice == "avocado"){
      var avocado = 1;
      console.log(avocado);
    }
    if (choice == "leafy_green"){
      var leafy_greens = 1;
      console.log(leafy_greens);
    }
    if (choice == "tropical_exotic"){
      var tropical_exotic = 1;
      console.log(tropical_exotic);
    }
    if (choice == "citrus"){
      var citrus = 1;
      console.log(citrus);
    }
    if (choice == "root"){
      var root = 1;
      console.log(root);
    }
    if (choice == "stone_fruits"){
      var stone_fruits = 1;
      console.log(stone_fruits);
    }
    if (choice == "melons"){
      var melons = 1;
      console.log(melons);
    }
    if (choice == "marrow"){
      var marrow = 1;
      console.log(marrow);
    }
    var path = "whatsinyourfridge.json"
    fetchJSON(path, function(data){
    var i;
    for (i = 0; i < data.recipe.length; i++) {
        for (var j =0; j < data.recipe[i].ingredient.length; j++){

          if (data.recipe[i].ingredient[j].name.search("avocado") > -1 && avocado==1){
            console.log("FOUND");
            document.getElementById('articleSource').innerHTML = data.recipe[i].name;
          }

           if ((data.recipe[i].ingredient[j].name.search("apple") > -1 || data.recipe[i].ingredient[j].name.search("pear") > -1) && apple == 1){
            document.getElementById('articleSource').innerHTML = data.recipe[i].name;
          }
          if ((data.recipe[i].ingredient[j].name.search("banana") > -1 || data.recipe[i].ingredient[j].name.search("mango") > -1 || data.recipe[i].ingredient[j].name.search("durian") > -1 || data.recipe[i].ingredient[j].name.search("longan") > -1 || data.recipe[i].ingredient[j].name.search("jackfruit") > -1) && tropical_exotic == 1){
           document.getElementById('articleSource').innerHTML = data.recipe[i].name;
         }
         if ((data.recipe[i].ingredient[j].name.search("peach") > -1 || data.recipe[i].ingredient[j].name.search("plum") > -1 || data.recipe[i].ingredient[j].name.search("nectarine") > -1 || data.recipe[i].ingredient[j].name.search("apricot") > -1) && stone_fruits == 1){
          document.getElementById('articleSource').innerHTML = data.recipe[i].name;
        }
        if ((data.recipe[i].ingredient[j].name.search("strawberries") > -1 || data.recipe[i].ingredient[j].name.search("blueberries") > -1 || data.recipe[i].ingredient[j].name.search("rasberries") > -1 || data.recipe[i].ingredient[j].name.search("kiwi") > -1) && berries == 1){
         document.getElementById('articleSource').innerHTML = data.recipe[i].name;
       }
       if ((data.recipe[i].ingredient[j].name.search("orange") > -1 || data.recipe[i].ingredient[j].name.search("grapefruit") > -1 || data.recipe[i].ingredient[j].name.search("tangerine") > -1 || data.recipe[i].ingredient[j].name.search("lemon") > -1) && citrus == 1){
        document.getElementById('articleSource').innerHTML = data.recipe[i].name;
      }
      if ((data.recipe[i].ingredient[j].name.search("lettuce") > -1 || data.recipe[i].ingredient[j].name.search("spinach") > -1 || data.recipe[i].ingredient[j].name.search("kale") > -1) && leafy_greens == 1){
       document.getElementById('articleSource').innerHTML = data.recipe[i].name;
     }
     if ((data.recipe[i].ingredient[j].name.search("potato") > -1 || data.recipe[i].ingredient[j].name.search("yam")) && root == 1){
      document.getElementById('articleSource').innerHTML = data.recipe[i].name;
    }
    if ((data.recipe[i].ingredient[j].name.search("pumpkin") > -1 || data.recipe[i].ingredient[j].name.search("cucumber") ||  data.recipe[i].ingredient[j].name.search("zuchinni")) && marrow == 1){
     document.getElementById('articleSource').innerHTML = data.recipe[i].name;
   }
        }

    }

      // document.getElementById('articleSource').innerHTML = data.recipe[0].name;
      // document.getElementById('showStory').appendChild(articleSource);
    });
}
// function init() {
//   var path = "whatsinyourfridge.json"
//   fetchJSON(path, function(data){
//     console.log(data.results[0].title);
//       articleSource.innerHTML = data.results[0].title;
//       document.getElementById('showStory').appendChild(articleSource);
//       console.log(data.results[0].title);
//
//   });
// }str.search("W3Schools");

function init() {
  // var path = "whatsinyourfridge.json"
  // fetchJSON(path, function(data){
  // var i;
  // for (i = 0; i < data.recipe.length; i++) {
  //     for (var j =0; j < data.recipe[i].ingredient.length; j++){
        // if (data.recipe[i].ingredient[j].name.search("apple") > -1){
        //   console.log("FOUND");
        //   document.getElementById('articleSource').innerHTML = data.recipe[i].name;
        // }
        // if (data.recipe[i].ingredient[j].name.search("avocado") > -1 && avocado==1){
        //   document.getElementById('articleSource').innerHTML = data.recipe[i].name;
        // }
        // console.log(data.recipe[i].ingredient[j].name);
      // }

  // }


    // document.getElementById('articleSource').innerHTML = data.recipe[0].name;
    // document.getElementById('showStory').appendChild(articleSource);
  // });
}

window.onload = init;
