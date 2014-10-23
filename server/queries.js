var Sequelize = require('sequelize');

var sequelize = new Sequelize("lionbase", "bc8fa3955e6d18", "83511e40", {
  host: 'us-cdbr-azure-west-a.cloudapp.net',
  define: {
    underscored: false,
    freezeTableName: false,
    syncOnAssociation: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    classMethods: {method1: function() {}},
    instanceMethods: {method2: function() {}},
    timestamps: true
  }
});

var Story = sequelize.define('Story', {
  by: Sequelize.STRING,
  id: {type: Sequelize.INTEGER, primarykey: true, unique: true},
  kids: Sequelize.TEXT,
  score: Sequelize.INTEGER,
  time: Sequelize.INTEGER,
  title: Sequelize.STRING,
  type: Sequelize.STRING,
  url: Sequelize.TEXT
});

var Comment = sequelize.define('Comment', {
  by: Sequelize.STRING,
  id: {type: Sequelize.INTEGER, primarykey: true, unique: true},
  kids: Sequelize.TEXT,
  parent: Sequelize.INTEGER,
  text: Sequelize.TEXT,
  time: Sequelize.INTEGER,
  type: Sequelize.STRING
});

var Job = sequelize.define('Job', {
  by: Sequelize.STRING,
  id: {type: Sequelize.INTEGER, primarykey: true, unique: true},
  score: Sequelize.INTEGER,
  text: Sequelize.STRING,
  time: Sequelize.INTEGER,
  title: Sequelize.STRING,
  type: Sequelize.STRING,
  url: Sequelize.STRING
});

var Poll = sequelize.define('Poll', {
  by: Sequelize.STRING,
  id: {type: Sequelize.INTEGER, primarykey: true, unique: true},
  kids: Sequelize.TEXT,
  parts: Sequelize.TEXT,
  score: Sequelize.INTEGER,
  text: Sequelize.TEXT,
  time: Sequelize.INTEGER,
  title: Sequelize.STRING,
  type: Sequelize.STRING
});

var PollOption = sequelize.define('PollOption', {
  by: Sequelize.STRING,
  id: {type: Sequelize.INTEGER, primarykey: true, unique: true},
  kids: Sequelize.TEXT,
  parent: Sequelize.INTEGER,
  score: Sequelize.INTEGER,
  text: Sequelize.TEXT,
  time: Sequelize.INTEGER,
  type: Sequelize.STRING
});

var User = sequelize.define('User', {
  about: Sequelize.STRING,
  created: Sequelize.INTEGER,
  delay: Sequelize.INTEGER,
  id: {type: Sequelize.STRING, primarykey: true},
  karma: Sequelize.INTEGER,
  submitted: Sequelize.TEXT,
});

sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  })


/*
Helper queries. 
*/
module.exports.getStory = function(id, callback) {
  Story
  .find({ where: { id: id } })
  .complete(function(err, story) {
    if (!!err) {
      console.log('An error occurred while searching:', err)
    } else if (!story) {
      console.log('No story with that id found.')
    } else {
      callback(story.values);
    }
  })
}

module.exports.getComment = function(id, callback) {
  Story
  .find({ where: { id: id } })
  .complete(function(err, comment) {
    if (!!err) {
      console.log('An error occurred while searching:', err)
    } else if (!comment) {
      console.log('No comment with that id found.')
    } else {
      callback(comment.values);
    }
  })
}
module.exports.getJob = function(id, callback) {
  Story
  .find({ where: { id: id } })
  .complete(function(err, job) {
    if (!!err) {
      console.log('An error occurred while searching:', err)
    } else if (!job) {
      console.log('No job with that id found.')
    } else {
      callback(job.values);
    }
  })
}

module.exports.getPoll = function(id, callback) {
  Story
  .find({ where: { id: id } })
  .complete(function(err, poll) {
    if (!!err) {
      console.log('An error occurred while searching:', err)
    } else if (!poll) {
      console.log('No poll with that id found.')
    } else {
      callback(poll.values);
    }
  })
}

module.exports.getPollOption = function(id, callback) {
  Story
  .find({ where: { id: id } })
  .complete(function(err, pollOpt) {
    if (!!err) {
      console.log('An error occurred while searching:', err)
    } else if (!pollOpt) {
      console.log('No pollOpt with that id found.')
    } else {
      callback(pollOpt.values);
    }
  })
}

module.exports.getUser = function(id, callback) {
  User
  .find({ where: { id: 'sama' } })
  .complete(function(err, user) {
    if (!!err) {
      console.log('An error occurred while searching:', err)
    } else if (!user) {
      console.log('No user with that id found.')
    } else {
      console.log('Hello ' + user.id + '!')
      console.log('All attributes of user:', user.values)
    }
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




