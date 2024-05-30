const userResponse = document.getElementById("userResponse").value

// const workEl = document.getElementById 
fetch("https://api.api-ninjas.com/v1/exercises?muscle=biceps",{
    headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
    contentType: 'application/json'
}).then(function(res){
    return res.json()
}).then(function(data){
    console.log(data)
})


// Nutrition api
// fetch(" ", {

// });

// make button a variable to use in JS
const RdmFoodBtn = document.getElementById("RdmMeal");
const RdmWoBtn = document.getElementById("RdmWO");


// fetch("https://trackapi.nutritionix.com/v2/search/instant/?query=hamburger",{
//     headers: { 'X-Api-Key': '6abbd1aa01c66ad0233cda2968c0b2ae'},
//     contentType: 'application/json',
// }).then(function(res){
//     return res.json()
// }).then(function(data){
//     console.log(data)
// })


var options = {
  'method': 'GET',
  'url': 'https://trackapi.nutritionix.com/v2/search/instant/?query=(userResponse)',
  'headers': {
    'Content-Type': 'application/json',
    'x-app-id': 'AP ID faeec5b8',
    'x-app-key': '6abbd1aa01c66ad0233cda2968c0b2ae'
  }
};

