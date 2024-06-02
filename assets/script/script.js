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


const cardioData = [];
const olympic_weightliftingData = [];
const plyometricsData = [];
const powerliftingData = [];
const strengthData = [];
const stretchingData = [];
const strongmanData = [];
// use for loop print data then push into array

// Store api data as a array
fetch("https://api.api-ninjas.com/v1/exercises?cardio=",{
    headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
    contentType: 'application/json'
}).then(response => {
    if (!response.ok) {
        throw new error('Network response was not ok')
    }
    return response.json();
})
.then(data => {
   
   
    cardioData.push(data);
    console.log(cardioData);
})
.catch(error => {
    console.log('There was a problem fetching the data: ', error);
});

// fetch("https://api.api-ninjas.com/v1/exercises?olympicWeightlifting=",{
//     headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
//     contentType: 'application/json'
// }).then(function(res){
//     return res.json()
// }).then(function(data){
//     console.log(data)
   
//     let olympicWeightliftingData = data;
    
// })

// fetch("https://api.api-ninjas.com/v1/exercises?plyometrics=",{
//     headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
//     contentType: 'application/json'
// }).then(function(res){
//     return res.json()
// }).then(function(data){
//     console.log(data)
   
//     let plyometricsData = data;
    
// })

// fetch("https://api.api-ninjas.com/v1/exercises?powerlifting=",{
//     headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
//     contentType: 'application/json'
// }).then(function(res){
//     return res.json()
// }).then(function(data){
//     console.log(data)
   
//     let powerliftingData = data;
    
// })

// fetch("https://api.api-ninjas.com/v1/exercises?strength=",{
//     headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
//     contentType: 'application/json'
// }).then(function(res){
//     return res.json()
// }).then(function(data){
//     console.log(data)
   
//     let strengthData = data;
    
// })

// fetch("https://api.api-ninjas.com/v1/exercises?stretching=",{
//     headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
//     contentType: 'application/json'
// }).then(function(res){
//     return res.json()
// }).then(function(data){
//     console.log(data)
   
//     let stretchingData = data;
    
// })

// fetch("https://api.api-ninjas.com/v1/exercises?strongman=",{
//     headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
//     contentType: 'application/json'
// }).then(function(res){
//     return res.json()
// }).then(function(data){
//     console.log(data)
   
//     let strongmanData = data;
    
// })

// const workOuts = [cardioData, olympic_weightliftingData, plyometricsData, powerliftingData, strengthData, strengthData, strongmanData];

if(RdmWoBtn.onclick) {
    for(let i = 0; i < 1; i++){
        let i = workOuts;
        console.log(i)
        
    }
    let randomWorkout = Math.random(i);
        console.log(randomWorkout);
    console.log('hello world')
}


// Convert array to a increasing iterative number

// Use math.random or something to pick a random number from the array, the number just representing the workout information// when get random workout it will pop up a see results link bringing you to the results section on the webpage
