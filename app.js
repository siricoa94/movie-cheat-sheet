$("#sub").on("click", function() {
var input = $("#exampleFormControlInput1").val();
var queryURL = "https://www.omdbapi.com/?t=" + input + "&apikey=trilogy";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    //console.log(response.Title);
    // console.log(response.Year);
    // console.log(response.Actors);

    var tRow = $("<tr>");
      var titleTd = $("<td>").text(response.Title);
      var yearTd = $("<td>").text(response.Year);
      var actorsTd = $("<td>").text(response.Actors);
      tRow.append(titleTd, yearTd, actorsTd);
      $("tbody").append(tRow);
    });

    var marvelQuery = "https://gateway.marvel.com:443/v1/public/characters?name="+ input + "&apikey=e62570fc3a5cf052e86bd0980740c3db";
  

    $.ajax({
        url: marvelQuery,
        method: "GET"
      }).then(function(inf) {
        console.log(marvelQuery);       
          console.log(input);
          console.log(inf.description);
  })
})
