
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
   
   
}})}
enduranceSelection()


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
        ddBtn.id = [i] //assigns an unique id to the button 
        ddBtn.innerText = data[i].name; //displays name of workout on dropdown button
        elemelon.appendChild(ddBtn) 
        ddownEl2.appendChild(elemelon)
        console.log(ddownEl2)
       const selection = addEventListener('select', ddownEl2)
       
    }})
}

addEventListener('change',strengthSelection )


// make button a variable to use in JS
const RdmWoBtn = document.getElementById("RdmWO");


//button disappear and then appears the results (in progress)
const invisibleResultsEl= document.getElementById('results')
const resultsButtonEl = document.getElementById("workout-results")

function appear(){
    invisibleResultsEl.style.display = 'none'
    const workoutResults = document.getElementById('endurance')
    workoutResults.className ='d-block'
    
}
    resultsButtonEl.addEventListener('click', appear)

fetch(`https://trackapi.nutritionix.com/v2/search/instant/?query=(input)`, 
{
    'headers': {
        'Content-Type': 'application/json',
        'x-app-id': 'faeec5b8',
        'x-app-key': '6abbd1aa01c66ad0233cda2968c0b2ae'
    }
}).then(function(res){
    return res.json();
}).then(function(data){
    console.log(data);
for(let i = 0; i < data.branded.length; i++) {
    console.log(data.branded[i]);
}

})

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