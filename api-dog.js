// //fonction fléchée + fonction IIFE (économie de code) à utiliser quand la fonction est anonyme
// (async()=> {
//     //le try contient plusieurs instructions qui génére des exeptions, le catch est utilisé
//     //pour gérer une exeption
  
//   try {
//     const url = 'dog.json'
   
//     console.log(url)
//   } catch (error) {
//     console.warn(error)
//   }
// ()

// })()

let container = document.querySelector(".container")

fetch('dog.json')
    .then(function(response) {
      if (!response.ok) {
        // throw new Error("HTTP error, status = " + response.status);
        return response.json();
      }  else {
        throw new Error('Something went wrong');
      }
    })
  
    .catch(function(error) {
      var p = document.createElement('p');
      p.appendChild(
        document.createTextNode('Error: ' + error.message)
      );
      document.body.insertBefore(p, container);
    });