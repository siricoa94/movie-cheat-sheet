$("#sub").on("click", function (event) {
  event.preventDefault();

  var movieName = $("#exampleFormControlInput1").val().toLowerCase().trim();



  $("tbody").empty();
  $('#gifyImageLoader').empty();

  var input = movieName
  var queryURL = "https://www.omdbapi.com/?t=" + input + "&plot=full&apikey=trilogy" //&&
  //"https://www.omdbapi.com/?t=" + input + "&y=" + input + "&apikey=trilogy";

  console.log(input);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    var tRow = $("<tr>");
    var titleTd = $("<td>").text(response.Title);
    var yearTd = $("<td>").text(response.Released);
    var ratedTD = $("<td>").text(response.Rated);
    var plotTd = $("<td>").text(response.Plot);
    var actorTd = $("<td>").text(response.Actors);
    var ratingsTd = $("<td>").text(response.Ratings[0].Value);
    var imgURL = response.Poster;
    var image = $("<img>").attr("src", imgURL)
    tRow.append(image, titleTd, yearTd, ratingsTd,
      plotTd, ratedTD, actorTd);
    $("tbody").append(tRow);

  });
});
$("#sub").on("click", function (event) {
  event.preventDefault();

  var Giphycall = $("#exampleFormControlInput1").val().toLowerCase().trim();



  var input = Giphycall
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

});

  // var tvURL = "http://api.tvmaze.com/search/shows?q=" + input;

  // $.ajax({
  //   url: tvURL,
  //   method: "GET"
  // }).then(function (telvision) {
  //   console.log(telvision);
  //   var tvRow = $("<tr>");
  //   var nameTD = $("<td>")
  //   tvRow.append(nameTD)
  //   $("tbody").apend(tvRow);
  // });