$("#sub").on("click", function () {
  var input = $("#exampleFormControlInput1").val();
  var ironman = ['Iron Man', 'Iron Man 2', "Iron Man 3"]

  var queryURL = "https://www.omdbapi.com/?t=" + input + "&apikey=trilogy";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    //console.log(response.Title);
    // console.log(response.Year);
    // console.log(response.Actors);
    if (input = 'Iron Man' || 'Iron-Man') {
      for (var i = 0; i < ironman.length; i++) {
        input = ironman[i];
        var tRow = $("<tr>");
        var titleTd = $("<td>").text(response.Title);
        var yearTd = $("<td>").text(response.Year);
        var actorsTd = $("<td>").text(response.Actors);
        tRow.append(titleTd, yearTd, actorsTd);
        $("tbody").append(tRow);

      }
    }
    var tRow = $("<tr>");
    var titleTd = $("<td>").text(response.Title);
    var yearTd = $("<td>").text(response.Year);
    var actorsTd = $("<td>").text(response.Actors);
    tRow.append(titleTd, yearTd, actorsTd);
    $("tbody").append(tRow);
  });

  var marvelQuery = "https://gateway.marvel.com:443/v1/public/characters?name=" + input + "&apikey=e62570fc3a5cf052e86bd0980740c3db";


  $.ajax({
    url: marvelQuery,
    method: "GET"
  }).then(function (inf) {
    console.log(marvelQuery);
    console.log(input);
    console.log(inf.description);
  })
});

// TEST PUSH
