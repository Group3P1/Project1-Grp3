
const ddownEl1 = document.getElementById("dd1")
const ddownEl2 = document.getElementById("dd2")

const selectChangeHandler = function(instructions){
   const workoutResults = document.getElementById('endurance')

    const allWorkouts = document.createElement('p')
    workoutResults.appendChild(allWorkouts)
    allWorkouts.innerText = instructions
    // console.log(instructions)
    // console.log("hello")

}

const enduranceSelection = function(){
    fetch("https://api.api-ninjas.com/v1/exercises?type=cardio",{
        headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
        contentType: 'application/json'
    }).then(function(res){
        return res.json()
    }).then(function(data){
        console.log(data)
        for(let i =0; i<data.length;i++){
            const ddownEl1 = document.getElementById("dd1")//gets dropdown menu from HTML
            const elemelon = document.createElement("li")//creates list element within dropdown for each workout
            const ddBtn = document.createElement("button")//button containing list element 
            ddBtn.className = "dropdown-item"//add bootstrap styling to injected list/button
            ddBtn.id = [i] //assigns an unique id to the button 
            ddBtn.innerText = data[i].name; //displays name of workout on dropdown button
            elemelon.appendChild(ddBtn) 
            ddownEl1.appendChild(elemelon)
            console.log(ddownEl1)
            const listItem = document.getElementById(ddBtn.id)
            const selectedData = data[i].instructions
            listItem.addEventListener('click', function(){
                selectChangeHandler(selectedData)
            })
        }}
    )}

enduranceSelection()

const selectChangeHandler2 = function(instructions){
    const workoutResults = document.getElementById('strength')
 
     const allWorkouts = document.createElement('p')
     workoutResults.appendChild(allWorkouts)
     allWorkouts.innerText = instructions
     // console.log(instructions)
     // console.log("hello")
 
 }
const strengthSelection = function(){
    fetch("https://api.api-ninjas.com/v1/exercises?type=strength",{
        headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
        contentType: 'application/json'
    }).then(function(res){
        return res.json()
    }).then(function(data){
        console.log(data)
        for(let i =0; i<data.length;i++){
            const ddownEl2 = document.getElementById("dd2")//gets dropdown menu from HTML
            const elemelon = document.createElement("li")//creates list element within dropdown for each workout
            const ddBtn = document.createElement("button")//button containing list element 
            ddBtn.className = "dropdown-item"//add bootstrap styling to injected list/button
            ddBtn.id = "0" +[i] //assigns an unique id to the button 
            ddBtn.innerText = data[i].name; //displays name of workout on dropdown button
            elemelon.appendChild(ddBtn) 
            ddownEl2.appendChild(elemelon)
            console.log(ddownEl1)
            const listItem = document.getElementById(ddBtn.id)
            const selectedData = data[i].instructions
            listItem.addEventListener('click', function(){
                selectChangeHandler(selectedData)
            })
           
           
        }}
)}

strengthSelection()





//button disappear and then appears the results (in progress)
const invisibleResultsEl= document.getElementById('results')
const resultsButtonEl = document.getElementById("workout-results")

function appear(){
    invisibleResultsEl.style.display = 'none'
    const workoutResults = document.getElementById('endurance')
    workoutResults.className ='d-block'
    
}

resultsButtonEl.addEventListener('click', appear)

// function appear(){
//     const displayedResults = document.createElement('div')
//     displayedResults.id = 'addedResults'
//     displayedResults.className = 'border border-dark rounded'
// }
// resultsButtonEl.addEventListener('click', disappear)

// made fetch for food selector and added for loop (trying to make it work)
const input = document.getElementById("userResponse");
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const getFood = function() 
{

    fetch(`https://trackapi.nutritionix.com/v2/search/instant/?query=hamburger`, 
    {
        'headers': {
            'Content-Type': 'application/json',
            'x-app-id': 'faeec5b8',
            'x-app-key': '6abbd1aa01c66ad0233cda2968c0b2ae'
        }
    }).then(function(res){
        return res.json();
    }).then(function(data) {  
        console.log(data);
        for(let i = 0; i < data.branded.length; i++) {
        console.log(data.branded[i]);
        }
    })
}
resultsButtonEl.addEventListener('click', appear);

// add event listener search button to type food of choice
searchButton.addEventListener('click', getFood);
//     // get the search input value
//     const searchTerm = input.value;
//     // log what the user requests to find nutrient info for  
    // console.log();
//   };
  
  // add event listener to the input to search on Enter keypress
//   searchInput.addEventListener('keyup', function(event) {
//     if (event.keyCode === 13) {
//       // simulate a button click to trigger the search
//       searchButton.addEventListener('click');
//     }
//   });

// make button a variable to use in JS
const cardioButton = document.getElementById("cardioButton");

// Array for specific workout types, Want to see a random WorkOut from each respective type when clicking on button for said Work-out type
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
    // error checking
    if (!response.ok) {
        throw new error('Network response was not ok')
    }
    return response.json();
})
.then(data => {
    // pushing WorkOut type data into the array
    cardioData.push(data);
    // logging that it is in that array
    console.log(cardioData);
})
// more error checking
.catch(error => {
    console.log('There was a problem fetching the data: ', error);
});


// got random button to react to being clicked 
cardioButton.addEventListener('click', function(){
    //test that button click works
    console.log("hello console")
    // need to make it where when clicking the button it generates a random workout from that workout type 

})
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
