$("#sub").on("click", function () {
  event.preventDefault();

  var movieName = $("#exampleFormControlInput1").val().toLowerCase().trim();



  $("tbody").empty();

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
    // ratingsTd.append(response.Ratings[2].Value);
    var imgURL = response.Poster;
    var image = $("<img>").attr("src", imgURL)
    tRow.append(image, titleTd, yearTd, ratingsTd,
      plotTd, ratedTD, actorTd);
    $("tbody").append(tRow);

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
  // })