$(document).on("keypress", function (event) {
  if (event.which == 13) {
    event.preventDefault();
    $("tr").remove();
    $('#gifyImageLoader').empty();
    omdb();
    giphy();
  }
});





var input = $("#exampleFormControlInput1").val().toLowerCase().trim();
console.log(input)
var queryURL = "https://www.omdbapi.com/?t=" + input + "&plot=full&apikey=trilogy";
var giphyurl = "https://api.giphy.com/v1/gifs/search?q=" + input +
  "&api_key=LgLbsRdUWao0JhCQMJryh9mbJgxU03D8&limit=1";
$("#sub").on("click", function () {
  $("tr").remove();
  $('#gifyImageLoader').empty();
  omdb();
  giphy();
});


function omdb() {
  var InfoHeading = $("<tr>")
  var pHead = $("<th scope='col' id='tableFirst'>").text("Poster");
  var tHead = $("<th scope='col' id='tableLast'>").text("Title");
  var yHead = $("<th scope='col' id='tableHandle'>").text("Premiered");
  var iHead = $("<th scope='col' id='tableHandle'>").text("IMDB Rating")
  var plHead = $("<th scope='col' id='tableHandle'>").text("Plot Summary")
  var rHead = $("<th scope='col' id='tableHandle'>").text("Rating")
  var sHead = $("<th scope='col' id='tableHandle'>").text("Stars")
  InfoHeading.append(pHead, tHead, yHead, iHead, plHead, rHead, sHead);
  $(".table").append(InfoHeading);






  var input = $("#exampleFormControlInput1").val().toLowerCase().trim();

  var queryURL = "https://www.omdbapi.com/?t=" + input + "&plot=full&apikey=trilogy";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    var tRow = $("<tr>");
    var titleTd = $("<td class='Info'>").text(response.Title);
    var yearTd = $("<td>").text(response.Released);
    var ratedTD = $("<td>").text(response.Rated);
    var plotTd = $("<td>").text(response.Plot);
    var actorTd = $("<td>").text(response.Actors);
    var ratingsTd = $("<td>").text(response.Ratings[0].Value);
    var imgURL = response.Poster;
    var image = $("<img>").attr("src", imgURL)
    tRow.append(image, titleTd, yearTd, ratingsTd,
      plotTd, ratedTD, actorTd);
    $(".table").append(tRow);

  });
};

function giphy() {
  var input = $("#exampleFormControlInput1").val().toLowerCase().trim();

  var giphyurl = "https://api.giphy.com/v1/gifs/search?q=" + input +
    "&api_key=LgLbsRdUWao0JhCQMJryh9mbJgxU03D8&limit=1";
  console.log(input);

  $.ajax({
    url: giphyurl,
    method: "GET"
  }).then(function (memes) {
    console.log(memes.data);
    var results = memes.data
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      var fun = $('<div>');
      var gifsImage = $('<img>');
      gifsImage.attr('src', results[i].images.fixed_height.url);
      gifsImage.attr("data-animate", results[i].images.fixed_height.url)
      gifsImage.addClass('gif');

      fun.append(gifsImage);

      $('#gifyImageLoader').prepend(fun);

    };

  });

}








