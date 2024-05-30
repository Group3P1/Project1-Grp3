// const workEl = document.getElementById 
fetch("https://api.api-ninjas.com/v1/exercises?muscle=biceps",{
    headers: { 'X-Api-Key': 'QZMGE5WHwNHEyx4FFqOkdg==NkZXuWGPrCiOnGz8'},
    contentType: 'application/json',git 
}).then(function(res){
    return res.json()
}).then(function(data){
    console.log(data)
})

fetch("https://",{
    headers: { 'X-Api-Key': '6abbd1aa01c66ad0233cda2968c0b2ae'},
    contentType: 'application/json',
}).then(function(res){
    return res.json()
}).then(function(data){
    console.log(data)
})