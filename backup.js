

$("#sub").on("click", function () {
 {
      var queryURL = "https://www.omdbapi.com/?t=" + input + "&apikey=trilogy";

      console.log(input);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        var tRow = $("<tr>");
        var titleTd = $("<td>").text(response.Title);
        var yearTd = $("<td>").text(response.Year);
        var plotTd = $("<td>").text(response.Plot);
        tRow.append(titleTd, yearTd, plotTd);
        $("tbody").append(tRow);
      });
    };






});

