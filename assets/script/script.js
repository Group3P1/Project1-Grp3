// const workEl = document.getElementById 
fetch("https://api.api-ninjas.com/v1/exercises?muscle=biceps",{
    headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
    contentType: 'application/json',git 
}).then(function(res){
    return res.json()
}).then(function(data){
    console.log(data)
})

fetch("https://www.nutritionix.com/api",{
    headers: { 'X-Api-Key': ''},
    contentType: 'application/json',git 
}).then(function(res){
    return res.json()
}).then(function(data){
    console.log(data)
})