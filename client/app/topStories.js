/*
This all needs to be integrated with angular and retrieve the username from an input tag in html, but right 
now it's hardcoded and seems to work. 

Bug: doesn't work for users with a HUGE amount of submissions. For example, pg has over 12000, so 
it freaks out if you try him
*/

var username = "seanmccann";
var storyIds;
var items = [];
var topStories;
var url = "https://hacker-news.firebaseio.com/v0/";


$.get(url + "/user/" + username + ".json", function(userProfile, status) {
  storyIds = userProfile.submitted;
  storyIds.forEach(function(storyId) {
    $.get(url + "/item/" + storyId + ".json", function(story, status) {
      items.push(story);
      if(items.length === storyIds.length) {
        stories = items.filter(function(story) {
          return story.score;
        })
        stories.sort(sortByScore)
        topStories = stories.slice(0,10);
        console.log(topStories);
        $('.view').append('<h3>' + 'Top Stories By '+ username +'<br>' + '</h3>');
        for(var i = 0; i < topStories.length; i++){
          var story = "<div class='story'>" + '<strong>Title: </strong>'+  topStories[i].title + '<br>' +
                      "<strong>Score: </strong>" + topStories[i].score + '<br>' +
                      "<strong>Link: </strong>" + topStories[i].url +'<br>'+'<br>' + "</div>"
          $('.view').append(story);
        }
      }
    })
  })
});


function sortByScore(a,b) {
  if (a.score < b.score)
     return 1;
  if (a.score > b.score)
    return -1;
  return 0;
}