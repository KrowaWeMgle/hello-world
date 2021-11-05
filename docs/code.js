console.log('i work');

let imgSrc;

console.log('Start');
fetch('img/coffie.jpg').
then(function(response){console.log(`I actualy work lmoa XD ${response}`);
return response.blob();})
.then(function(myBlob){
    let objectURL = URL.createObjectURL(myBlob);
    imgSrc = document.createElement('img');
    imgSrc.src = objectURL;
    document.body.appendChild(imgSrc);
})
.catch(function(error){console.log(`I faled u loser ${error}`);});
console.log('End');
