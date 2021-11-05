

let imgSrc;


fetch('img/cooffie.jpg').
then(function(response){console.log('Start');

return response.blob();})
.then(function(myBlob){
    let objectURL = URL.createObjectURL(myBlob);
    imgSrc = document.createElement('img');
    imgSrc.src = objectURL;
    document.body.appendChild(imgSrc);
    console.log(`I actualy work lmoa XD ${response}`);
})
.then(function(){console.log('End');})
.catch(function(error){console.log(`I faled u loser ${error}`);});

