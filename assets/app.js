$(document).ready(function(){

    var topics = ["Led Zepellin", "Soundgarden", "Foo fighters", "Hello Kitty", "Red Hot Chilli Peppers",];
   
$(document).on( "click", ".topic-btn", function(event) {
        $("#image").empty();
        //var items = $(".topic-btn").attr("data-name");
        console.log(event.target.innerHTML);
        var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + event.target.innerHTML + "&api_key=aZEpLYFVgusE3CUmYquWuobhHvxZscvt&limit=10";
    

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
    
        var gifDiv = $("#image");
        for (var i = 0; i < response.data.length; i++) {
            var rating = response.data[i].rating;
            console.log("This is the current rating: " + rating);
        
            var p = $("<p>").text("Raiting: " + rating);
            
            var gif = $("<img>");
            gif.attr("src", response.data[i].images.fixed_height.url);
            gifDiv.append(gif);
            gifDiv.append(p);
        }
        
    });
});

      /*Displaying the new topics, creating buttons*/
      function newButtons(){

          for (var i=0; i<topics.length; i++){
              var newButton = $("<button>");
              newButton.addClass("topic-btn");
              newButton.attr("data-name", topics[i]);
              newButton.text(topics[i]);
              $("#new-topic-btn").append(newButton);
          }
      }

    /*Event button clicked*/
    $("#add-topic").on( "click", function(event){
        event.preventDefault();
        var newButton = $("<button>");
        newButton.addClass("topic-btn");
    
        var newtopic = $("#new-topic-input").val().trim();
        newButton.attr("data-name", newtopic);
        newButton.text(newtopic);
        $("#new-topic-btn").append(newButton);
        
        //topics.push(topic);
        //newButtons();
    });
    
    /*creating buttons function*/
    newButtons();

});