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
Helper queries
*/
function getStory(id, callback) {
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

function getComment(id, callback) {
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
function getJob(id, callback) {
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

function getPoll(id, callback) {
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

function getPollOption(id, callback) {
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

function getUser(id, callback) {
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