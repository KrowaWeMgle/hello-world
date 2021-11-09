//promise https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

//Explaining basic promise syntax: A real example
/*
let promise = fetch('docs/img/coffie.jpg');
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
/*
let a = fetch('img/coffie');
let b = fetch('img/coffie');
let c = fetch('img/coffie');
*/
//Promise.all([a,b,c]).then(value => {});
/*
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
  })
  .finally(()=>{
    console.log(`fetch attempt for "${url}"" finished`);
  })
}

let coffee = fetchAndDecode('docs/img/coffie.jpg', 'blob');
let tea = fetchAndDecode('docs/img/tea.jpg', 'blob');
let description = fetchAndDecode('docs/img/description.txt', 'text');

Promise.all([coffee,tea,description]).then(val => {
  console.log(val);
  // Store each value returned from the promises in separate variables; create object URLs from the blobs
  let objectURL1 = URL.createObjectURL(val[0]);
  let objectURL2 = URL.createObjectURL(val[1]);
  let descText = val[2];
  
  // Display the images in <img> elements
  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);
  
  // Display the text in a paragraph
  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para);
});

*/
let pro1 = fetch("img/coffie.jpg")
.then(res => {console.log(`Status: ${res.ok}`);})
.catch(err => {console.log(`Status failed fetching`);})
.finally(console.log(`fetching ended`));
