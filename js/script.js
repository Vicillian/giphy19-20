/* global $ */

console.log('hi');

$('button').click(function(){
  var searchTerm = $("input").val();
  var encodedSearchTerm = encodeURIComponent(searchTerm);
  console.log(searchTerm);
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
    fetch("https://api.giphy.com/v1/gifs/search?rating=pg&api_key=dc6zaTOxFJmzC&q=" + encodedSearchTerm)
    .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var originalLink = data.data[0].images.original.url;
      $(".result").append(`<img src="${originalLink}">`);
      })
});