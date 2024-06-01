const userResponse = document.getElementById("userResponse").value 
const ddownEl1 = document.getElementById("dd1")
const ddownEl2 = document.getElementById("dd2")



fetch("https://api.api-ninjas.com/v1/exercises?type=strength",{
    headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
    contentType: 'application/json'
}).then(function(res){
    return res.json()
}).then(function(data){
   for(let i =0; i<data.length;i++){
    const elemelon = document.createElement("li")
    elemelon.classname = 'dropdown-item';
    elemelon.innerText = data[i].name
    ddownEl2.appendChild(elemelon)
   }
})

fetch("https://api.api-ninjas.com/v1/exercises?type=cardio",{
    headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
    contentType: 'application/json'
}).then(function(res){
    return res.json()
}).then(function(data){
    const ddownEl1 = document.getElementById("dd1")
   for(let i =0; i<data.length;i++){
    const elemelon2 = document.createElement("li")
    elemelon2.classname = 'dropdown-item';
    elemelon2.innerText = data[i].name
    ddownEl1.appendChild(elemelon2)
    console.log(elemelon2)

   }
})




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
if  (disappear = true){
    function appear(){
    const displayedResults = document.createElement('div')
    displayedResults.id = 'addedResults'
    displayedResults.className = 'border border-dark rounded'
    
    }
}


