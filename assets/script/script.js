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
<<<<<<< HEAD
// happy
=======


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


fetch(`https://trackapi.nutritionix.com/v2/search/instant/?query=hamburger`,
{
    'headers': {
        'Content-Type': 'application/json',
        'x-app-id': 'faeec5b8',
        'x-app-key': '6abbd1aa01c66ad0233cda2968c0b2ae'
    }
}).then(function(res){
    return res.json()
}).then(function(data){
    console.log(data)
})

>>>>>>> 4275cec50c0bfbc281298d4a88b9650c303de66d
