$("#sub").on("click", function () {


  var movieName = $("#exampleFormControlInput1").val().toLowerCase().trim();



  $("tbody").empty();

  var input = movieName
  var queryURL = "https://www.omdbapi.com/?t=" + input + "&apikey=trilogy";

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
    var ratingsTd =$("<td>").text(response.Ratings[1].Value);
    ratingsTd.append(response.Ratings[2].Value);
    var imgURL = response.Poster;
    var image = $("<img>").attr("src", imgURL)
    tRow.append(image, titleTd, yearTd, ratingsTd, plotTd, ratedTD, actorTd);
    $("tbody").append(tRow);

  });

  var tvURL = "http://api.tvmaze.com/search/shows?q=" + input;

  $.ajax({
    url: tvURL,
    method: "GET"
  }).then(function (telvision) {
    console.log(telvision);
    var tvRow = $("<tr>");
    var nameTD = $("<td>")
    tvRow.append(nameTD)
    $("tbody").apend(tvRow);
  });




  var giphyurl = "https://api.giphy.com/v1/gifs/search?q=" + input +
    "&api_key=LgLbsRdUWao0JhCQMJryh9mbJgxU03D8&limit=5";
  console.log(input);

  $.ajax({
    url: giphyurl,
    method: "GET"
  }).then(function (memes) {
    console.log(memes);
    var funtRow = $('<div>');
    var gifsImage = $('<img>');
    gifsImage.attr('src', memes.images.fixed_height.url);
    gifsImage.addClass('gif');
    $('#giphy').prepend(funtRow);


  })

});
