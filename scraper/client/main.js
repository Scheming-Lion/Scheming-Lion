var successItem = 0;
    var failureItem = 0;

    var start = 0;
    var end = 2000;

    // setInterval(function() {

    //   for(var i = start; i < end; i++) {
    //     $.get("https://hacker-news.firebaseio.com/v0/item/" + i + ".json",
    //       function(data) {
    //         $.ajax({
    //           type: "POST",
    //           url: "http://localhost:8000/",
    //           data: data
    //         })
    //         .done(function(x) {
    //           successItem++;
    //           $(".win").html(""+successItem);
    //         })
    //         .fail(function(x) {
    //           failureItem++;
    //           $(".lose").html(""+failureItem);
    //           console.log(x);
    //         });
    //       }
    //     )
    //     .fail(function(x) {
    //           failureItem++;
    //           $(".lose").html(""+failureItem);
    //           console.log(x);
    //         });

    //     start += 2000;
    //     end += 2000;
    //   }

    // }, 60000);

console.log("here");