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

//re-write primise.all
let a = fetch('img/coffie');
let b = fetch('img/coffie');
let c = fetch('img/coffie');

//Promise.all([a,b,c]).then(value => {});

function fetchAndDecode(url, type) {
    return fetch(url).then(response => {
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        if(type === 'blob') {
          return response.blob();
        } else if(type === 'text') {
          return response.text();
        }
      }
    })
    .catch(e => {
      console.log(`There has been a problem with your fetch operation for resource "${url}": ` + e.message);
    });
  }

let coffee = fetchAndDecode('coffee.jpg', 'blob');
let tea = fetchAndDecode('tea.jpg', 'blob');
let description = fetchAndDecode('description.txt', 'text');

Promise.all