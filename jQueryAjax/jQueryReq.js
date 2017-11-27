

function addImage(data) {
    const jsonData = JSON.parse(JSON.stringify(data)); // convert data from JSON to a JavaScript object
    console.log(jsonData);
}
const searchedForText = 'hippos';
$.ajax({
    url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
    crossDomain: true,
    headers: {
        'Authorization': 'Client-ID 0bc75f0b586e8b7875b8a3cca6dc80e83d563d98375daf83746aafaa9baf4df2',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    error: function (xhr) {
        console.log("An error occured: " + xhr.status + " " + xhr.statusText);
    }, success: addImage
});

