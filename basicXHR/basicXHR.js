var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function handleSuccess () {
    // in the function, the `this` value is the XHR object
    // this.responseText holds the response from the server
/* for a JSON response
const data = JSON.parse( this.responseText ); // convert data from JSON to a JavaScript object
console.log( data );
*/
    console.log( this.responseText ); // the HTML of https://unsplash.com/
}
function handleError () {
    // in the function, the `this` value is the XHR object
    console.log( 'An error occurred 😞' );
}


const req = new XMLHttpRequest();
req.open('GET', 'https://www.google.com/');
req.onload = handleSuccess;
req.onerror = handleError;
req.send();
