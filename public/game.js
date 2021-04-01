
let button = document.getElementById('myButton');
button.addEventListener('click', (e) => {

  fetch('/clicked', {method: 'POST'})
    .then((response) => {
      if(response.ok) {
        return;
      }
      throw new Error('Request failed.');
    })
    .catch((error) => {
      console.log(error);
    });

    // Set inetrvel to retrieve value
    setInterval(function() {
        //fetch. then // innerHTML getelementbyid
        fetch('/clicks', {method: 'GET'})
          .then((response) => {
            response.json()
          }).then(data => console.log(data))
          .catch((error) => {
            console.log(error);
          });
    }, 10);
});