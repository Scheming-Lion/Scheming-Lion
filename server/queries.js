var db = require('./database/database.js')

/* Helper queries. */
module.exports.getStory = function(callback) {
  db.Story
  .findAll({where: {id: {lte: 50}}})
  .success(function(story) {
    callback(story);
  })
}

module.exports.getComment = function(callback) {
  db.Comment
  .findAll({where: {id: {lte: 50}}})
  .success(function(comment) {
    callback(comment);
  })
}
module.exports.getJob = function(callback) {
  db.Job
  .findAll({where: {id: {lte: 50}}})
  .success(function(job) {
    callback(job);
  })
}

module.exports.getPoll = function(callback) {
  db.Poll
  .findAll({where: {id: {lte: 50}}})
  .success(function(poll) {
    callback(poll);
  })
}

module.exports.getPollOption = function(callback) {
  db.PollOption
  .findAll({where: {id: {lte: 50}}})
  .success(function(polloptions) {
    callback(polloptions);
  })
}

module.exports.getUser = function(callback) {
  db.User
  .findAll({where: {id: {lte: 50}}})
  .success(function(user) {
    callback(user);
  })
}

//gets all comments between two times. Still need to keep working
module.exports.getCommentsBetweenTimes = function(time1, time2, callback) {

  Comment.findAll({ where: ["time > ?", time1] }).success(function(comments) {
    callback(comments);
  })
}

/* non-querying helper functions. to be used as callbacks in the above functions */


//takes an array of comment ids (most likely from a query that returns a story or parent comments)
//and creates an array of the actual comments, and then calls a callback on this array
module.exports.getCommentsFromIds = function(commentIds, callback) {
  var comments = [];
  commentIds.foreach(function(id) {
    module.exports.getComment(id, function(comment) {
      comments.push(comment);
      if(comments.length === commentIds.length) {
        callback(comments);
      }
    })
  });
}

//Takes an array of comments (retrieved from a previous query), and returns ONLY those comments containing the keyword.
module.exports.checkKeywordComments = function(comments, keyword) {
  return comments.filter(function(comment) {
    return comment.text.indexOf(keyword) > -1;
  });
}

module.exports.sortByScore = function(a,b) {
  if (a.score < b.score)
     return 1;
  if (a.score > b.score)
    return -1;
  return 0;
}
module.exports.filterComments = function(comments) {
  return comments.filter(function(comment) {
    return comment.type === "comment";
  });
}


/* full-feature functions */

module.exports.getUserTopNStories = function(n, userid, callback) {
  module.exports.getUser(userid,function(user) {
    module.exports.getCommentsFromIds(user.submitted, function(items) {
      var comments = module.exports.filterComments(items);
      comments.sort(sortByScore);
      callback(comments.slice(0, n));
    })
  })
}






