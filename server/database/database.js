var Sequelize = require('sequelize');
var sequelize = new Sequelize("lionbase", "bc8fa3955e6d18", "83511e40", {
  host: 'us-cdbr-azure-west-a.cloudapp.net'
});

var Story = sequelize.define('Story', {
  id: {type: Sequelize.INTEGER, primarykey: true},
  title: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  text: Sequelize.TEXT,
  kids: Sequelize.TEXT,
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  deleted: Sequelize.BOOLEAN,
  dead: Sequelize.BOOLEAN
});

var Comment = sequelize.define('Comment', {
  id: {type: Sequelize.INTEGER, primarykey: true},
  title: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  text: Sequelize.TEXT,
  kids: Sequelize.TEXT,
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  deleted: Sequelize.BOOLEAN,
  dead: Sequelize.BOOLEAN,
});

var Job = sequelize.define('Job', {
  id: {type: Sequelize.INTEGER, primarykey: true},
  title: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  text: Sequelize.STRING,
  kids: Sequelize.TEXT,
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  deleted: Sequelize.BOOLEAN,
  dead: Sequelize.BOOLEAN,
});

var Poll = sequelize.define('Poll', {
  id: {type: Sequelize.INTEGER, primarykey: true},
  title: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  parts: Sequelize.TEXT,
  text: Sequelize.TEXT,
  kids: Sequelize.TEXT,
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  deleted: Sequelize.BOOLEAN,
  dead: Sequelize.BOOLEAN,
});

var PollOption = sequelize.define('PollOption', {
  id: {type: Sequelize.INTEGER, primarykey: true},
  title: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  text: Sequelize.STRING,
  kids: Sequelize.TEXT,
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  deleted: Sequelize.BOOLEAN,
  dead: Sequelize.BOOLEAN,
});

var User = sequelize.define('User', {
  id: {type: Sequelize.STRING, unique: true, primarykey: true},
  about: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  delay: Sequelize.INTEGER,
  karma: Sequelize.INTEGER,
  submitted: Sequelize.TEXT
});


////////////////////////////////////////////////
//Based on the Firebase structure, most data
//already exists in each table without the
//need to add additional relationships.
//However, here are some tradition relationships
//that we have identified for possible future
//use.
////////////////////////////////////////////////
Story.hasOne(User, {foreignKey: 'id'});
Story.hasMany(Comment, {as: 'Comments'});

Poll.hasMany(PollOption, {as: 'PollOptions'});
Poll.hasMany(Comment, {as: 'Comments'});

User.hasMany(Comment, {as: 'Comments'});
User.hasMany(Job, {as: 'Jobs'});
User.hasMany(Poll, {as: 'Polls'});
User.hasMany(PollOption, {as: 'PollOptions'});
User.hasMany(Story, {as: 'Stories'});

sequelize
  .sync()
  .complete(function(err) {
    if (!!err) {
      console.log('An error occured:', err);
    } else {
      console.log('Success!');
    }
  });