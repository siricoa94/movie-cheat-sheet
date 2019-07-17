$(document).on("keypress", function (event) {
  //keypress function -- whenever the user clicks enter
  if (event.which == 13) { //if button is the enter key
    event.preventDefault(); //stops the form from submitting
    $("tr").remove(); //removes the table row
    $('#gifyImageLoader').empty(); //empties any exisiting gifs 
    omdb();
    giphy(); //call omdb and giphy functions to display data
  }
});


var input = $("#exampleFormControlInput1").val().toLowerCase().trim(); //declares and stores user input value into var input
//also takes value, trims it (removes spaces) and puts it in all lower case
console.log(input) //testing input value
var queryURL = "https://www.omdbapi.com/?t=" + input + "&plot=full&apikey=trilogy";
/* The first part of the URL shows we are looking for the title using the input that the user gave us.
The second part of the URL is using an API key to access the information within the API
This entire link is being stored into a queryURL variable.
*/
var giphyurl = "https://api.giphy.com/v1/gifs/search?q=" + input +
  "&api_key=LgLbsRdUWao0JhCQMJryh9mbJgxU03D8&limit=1";
/* The first part of the URL shows we are querying for a certain term or phrase using the input that the user gave us.
The second part of the URL is using an API key to access the information within the API
This entire link is being stored into a giphyURL variable.
*/
//This is the function where a user clicks the submit button
$("#sub").on("click", function () {
  $("tr").remove(); //removes table row
  $('#gifyImageLoader').empty(); //empties any existing gifs
  omdb();
  giphy(); //call omdb and giphy functions to display data
});

/*OMDB function to display the response
The first part of the code will create a table with headers 
The following 2 statements receives the input from the user and creates a query URL that we will pass in the AJAX call
Finally in the AJAX call we will receive our response and access its properties to display the info in the table
*/

function omdb() {
  var InfoHeading = $("<tr>")
  //creates a table row and stores it into info heading
  var pHead = $("<tr scope='col' id='tableFirst'>").text("Poster");
  var tHead = $("<tr scope='col' id='tableLast'>").text("Title");
  var yHead = $("<tr scope='col' id='tableHandle'>").text("Premiered");
  var iHead = $("<tr scope='col' id='tableHandle'>").text("IMDB Rating")
  var plHead = $("<tr scope='col' id='tableHandle'>").text("Plot Summary")
  var rHead = $("<tr scope='col' id='tableHandle'>").text("Rating")
  var sHead = $("<tr scope='col' id='tableHandle'>").text("Stars")
  // creates table row and stores their values into a variable
  InfoHeading.append(pHead, tHead, yHead, iHead, plHead, rHead, sHead);
  //appends the variables into InfoHeading
  $(".table").append(InfoHeading);
  //appends all the values within InfoHeading into the class table of the HTMl





  var input = $("#exampleFormControlInput1").val().toLowerCase().trim();
  var queryURL = "https://www.omdbapi.com/?t=" + input + "&plot=full&apikey=trilogy";
  // see above

  //The ajax call uses the properties URL and method; we specify the values that we want to store in their properties
  //The url will use the queryURL we created and GET helps us request data from the source
  $.ajax({
    url: queryURL,
    method: "GET"
    //We use the .then function which promises that we will receive some response from the source
  }).then(function (response) {
    console.log(response)
    // the parts of repsonse we wnat to dipaly to the user are stored in variable
    var titleTd = $("<td class='Info'>").text(response.Title);
    var yearTd = $("<td>").text(response.Released);
    var ratedTD = $("<td>").text(response.Rated);
    var plotTd = $("<td>").text(response.Plot);
    var actorTd = $("<td>").text(response.Actors);
    var ratingsTd = $("<td>").text(response.Ratings[0].Value);
    var imgURL = response.Poster;
    var image = $("<img>").attr("src", imgURL)
    // each element of the response is appended to a table row
    pHead.append(image);
    tHead.append(titleTd);
    yHead.append(yearTd);
    iHead.append(ratedTD);
    plHead.append(plotTd);
    rHead.append(actorTd);
    sHead.append(ratingsTd);


  });
};

/*The giphy function first receives the input from the user and creates a query URL that we will pass in the AJAX call
The second part of the function we will receive our response and access its properties to display the info in the table
*/

function giphy() {
  var input = $("#exampleFormControlInput1").val().toLowerCase().trim();
  var giphyurl = "https://api.giphy.com/v1/gifs/search?q=" + input +
    "&api_key=LgLbsRdUWao0JhCQMJryh9mbJgxU03D8&limit=1";
  console.log(input);
  //The ajax call uses the properties URL and method; we specify the values that we want to store in their properties
  //The url will use the giphyURL we created and GET helps us request data from the source
  $.ajax({
    url: giphyurl,
    method: "GET"
    //We use the .then function which promises that we will receive some response (memes) from the source
  }).then(function (memes) {
    console.log(memes.data);
    var results = memes.data
    //stores the values of memes prop 'data' into the variable results
    //this will be an array of results
    console.log(results);
    //creates a for loop to run through the results array until there are no more results
    for (var i = 0; i < results.length; i++) {
      var fun = $('<div>');
      //creates a div element and stores it into var fun
      var gifsImage = $('<img>');
      //creates an image element and stores it into the var gifsImage
      gifsImage.attr('src', results[i].images.fixed_height.url);
      //the image will receive a new src attribute and receive the src value
      //the src value is received from accessing the results array's props: Images -> fixed height -> url
      gifsImage.attr("data-animate", results[i].images.fixed_height.url)
      //the image will receive a new data-animate attr and receive the data-animate value
      //the data-animate value is received from accessing the results array's props: Images -> fixed height -> url
      gifsImage.addClass('gif');
      //gives the image a class of 'gif'
      fun.append(gifsImage);
      //appends the image into the fun variable (a div element)

      $('#gifyImageLoader').prepend(fun);
      //prepends the div element into the div element with id of #gifyImageLoader
    };

  });

}