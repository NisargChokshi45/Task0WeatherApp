console.log('Client side javascript file is loaded!')

// fetch("http://puzzle.mead.io/puzzle")
//     .then((response) => {
//         response.json().then((data) => {
//             console.log(data);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// ----------------------------------
// Challenge : Fetch the Weather
// ----------------------------------
// fetch("http://localhost:3000/weather?address=gujarat")
//     .then((response) => {
//         response.json().then((data) => {
//             if (data.error) {
//                 console.log(data.error);
//             } else {
//                 console.log(`Place : ${data.place}`);
//                 console.log(`Latitude : ${data.latitude}`);
//                  console.log(`Longitude : ${data.longitude}`);
//                  console.log(`Weather : ${data.weather}`);
//                  console.log(`Temperature : ${data.temperature}`);
//             }
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });

const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');

// --------------------------------------------------------
// Challenge : Render the content in the Paragraphs
// --------------------------------------------------------
const messageOne = document.querySelector('#message1');
const messageTwo = document.querySelector("#message2");

// -------------------------------------------------------------------
// Challenge : Use input value to get the Weather from the API
// -------------------------------------------------------------------
weatherForm.addEventListener('submit', (event) => {
     // Prevents the Default behavior of browser --> Refreshing & Rendering the page
     messageOne.textContent = 'Finding best possible results . . .';
     event.preventDefault();
    const address = searchElement.value;
     // console.log(`You are searching for ${address}`);
     if (!address) {
          messageOne.textContent =
              "Please Enter a Valid Address in Seach Box !";
          // console.log("Please Enter a Valid Address in Seach Box !");
     } else {         
          fetch(`/weather?address=${address}`)
              .then((response) => {
                  response.json().then((data) => {
                      if (data.error) {
                          messageOne.textContent = data.error;
                          console.log(data.error);
                      } else {
                          messageOne.textContent = `Place : ${data.place}`;
                          messageTwo.textContent = `Weather : ${data.weather}  |  Temperature : ${data.temperature}`;
                      }
                  });
              })
              .catch((error) => {
                  console.log(error);
              });
}
});


