

function addArticles () {
    const data = JSON.parse( JSON.stringify(this.responseText) ); // convert data from JSON to a JavaScript object
    console.log( data );
}
const searchedForArticles = 'hippos';
$.ajax({
   // method: 'GET',
    url: `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForArticles}&api-key=a4aceeb4f0c14eb8a6f3e1f6119a6042`,
  //  dataType: 'json',
    error: function (xhr) {
        console.log("An error occured: " + xhr.status + " " + xhr.statusText);
    }, success: addImage
});

