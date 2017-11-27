var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function addImage(){
    const data = JSON.parse( JSON.stringify(this.responseText) ); // convert data from JSON to a JavaScript object
    console.log( data );
}
function handleError () {
    // in the function, the `this` value is the XHR object
    console.log( 'An error occurred 😞' );
}
const searchedForText = 'hippos';
const unsplashRequest = new XMLHttpRequest();

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;
unsplashRequest.onerror = handleError;
unsplashRequest.setRequestHeader('Authorization', 'Client-ID 0bc75f0b586e8b7875b8a3cca6dc80e83d563d98375daf83746aafaa9baf4df2');
unsplashRequest.send();