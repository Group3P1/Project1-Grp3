const userResponse = document.getElementById("userResponse").value 
const ddownEl1 = document.getElementById("dd1")
const ddownEl2 = document.getElementById("dd2")



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
}})

 fetch("https://api.api-ninjas.com/v1/exercises?type=cardio",{
    headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
    contentType: 'application/json'
}).then(function(res){
    return res.json()
}).then(function(data){
    console.log(data)
    const ddownEl1 = document.getElementById("dd1")
   for(let i =0; i<data.length;i++){
    const elemelon2 = document.createElement("li")
     const ddBtn2 = document.createElement("button")
     ddBtn2.className = "dropdown-item"
    ddBtn2.id = "0" + [i]
    ddBtn2.innerText = data[i].name;
    elemelon2.appendChild(ddBtn2)
    ddownEl1.appendChild(elemelon2)
    console.log(ddownEl1)
    
   }
})
// const el = document.createElement('div').classList.add('foo');


trim

// function isolateproperties(data)

// make button a variable to use in JS
const RdmWoBtn = document.getElementById("RdmWO");


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
//button disappear and then appears the results (in progress)
const invisibleResultsEl= document.getElementById('results')
const resultsButtonEl = document.getElementById("workout-results")

function disappear(){
    invisibleResultsEl.style.display = 'none'
}
resultsButtonEl.addEventListener('click', disappear)
addEventListener 
if  (disappear = true){
    function appear(){
    const displayedResults = document.createElement('div')
    displayedResults.id = 'addedResults'
    displayedResults.className = 'border border-dark rounded'
    
    }
}


