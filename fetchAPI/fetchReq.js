
var myHeaders = new Headers();

myHeaders.append('Authorization', 'Client-ID 0bc75f0b586e8b7875b8a3cca6dc80e83d563d98375daf83746aafaa9baf4df2');

fetch('https://api.unsplash.com/search/photos?page=1&query=flowers', { headers: myHeaders}).
then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  ).
  catch(function(err) {
    console.log('Fetch Error :-S', err);
  });