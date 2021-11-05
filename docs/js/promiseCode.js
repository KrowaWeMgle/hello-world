//promise https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

//Explaining basic promise syntax: A real example

let promise = fetch('cooffie.jpg');
let promise2 = promise.then(response => {
    if(!response.ok){throw new Error(`HTTP error! status: ${response.status}`);}
    else {return response.blob();}
});
let promise3 = promise2.then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
})
let errorCase = promise3.catch(e => {
    console.log(`There has been a problem with your fetch`);
});