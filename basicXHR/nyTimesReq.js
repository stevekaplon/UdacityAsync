var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const searchedForText = 'hippos';

function addArticles () {
    const data = JSON.parse( JSON.stringify(this.responseText) ); // convert data from JSON to a JavaScript object
    console.log( data );
}
const articleRequest = new XMLHttpRequest();
articleRequest.onload = addArticles;
articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=a4aceeb4f0c14eb8a6f3e1f6119a6042`);
articleRequest.send();