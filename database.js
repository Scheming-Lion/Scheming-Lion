var Sequelize = require('sequelize');

var Story = sequelize.define('Story', {
  id: {type: Sequelize.INTEGER, primarykey: true},
  title: Sequelize.STRING,
  by: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  text: Sequelize.STRING,
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  //figure out how to use array
  kids: Sequelize.ARRAY(Sequelize.STRING),
  //optional below here?
  deleted: Sequelize.BOOLEAN,
  dead: Sequelize.BOOLEAN
});

var Comment = sequelize.define('Comment', {
  id: {type: Sequelize.INTEGER, primarykey: true},
  by: Sequelize.STRING,
  parent: Sequelize.INTEGER,
  createdAt: Sequelize.INTEGER,
  text: Sequelize.STRING,
  //optional below here
  //figure out how to use array
  kids: Sequelize.ARRAY(Sequelize.INTEGER),
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  title: Sequelize.STRING
  deleted: Sequelize.BOOLEAN,
  dead: Sequelize.BOOLEAN,
});

var Job = sequelize.define('Job', {
  id: {type: Sequelize.INTEGER, primarykey: true},
  title: Sequelize.STRING
  by: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  text: Sequelize.STRING,
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  //figure out how to use array
  dead: Sequelize.BOOLEAN,
  kids: Sequelize.ARRAY(Sequelize.INTEGER),
  deleted: Sequelize.BOOLEAN
});

var Poll = sequelize.define('Poll', {
  id: {type: Sequelize.INTEGER, primarykey: true},
  title: Sequelize.STRING,
  by: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  parts: Sequelize.ARRAY(Sequelize.INTEGER),
  text: Sequelize.STRING,
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  //figure out how to use array
  kids: Sequelize.ARRAY(Sequelize.INTEGER),
  //optional
  deleted: Sequelize.BOOLEAN,
  dead: Sequelize.BOOLEAN,
});

var PollOption = sequelize.define('PollOption', {
  id: {type: Sequelize.INTEGER, primarykey: true},
  by: Sequelize.STRING,
  parent: Sequelize.INTEGER,
  score: Sequelize.INTEGER,
  text: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  //figure out how to use array
  kids: Sequelize.ARRAY(Sequelize.INTEGER),
  url: Sequelize.STRING,
  dead: Sequelize.BOOLEAN,
  deleted: Sequelize.BOOLEAN,
  title: Sequelize.STRING
});

var User = sequelize.define('User', {
  id: {type: Sequelize.STRING, unique: true, primarykey: true},
  about: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  delay: Sequelize.INTEGER,
  karma: Sequelize.INTEGER,
  submitted: Sequelize.ARRAY(Sequelize.INTEGER)
});

Story.hasOne(User, {foreignKey: 'id'});
Story.hasMany(Comment, {as: 'Comments'});

Comment.hasOne(User,);
Comment.hasOne(Story,);

Job.hasOne(User,)

Poll.hasMany(PollOption, {as: 'PollOptions'});
Poll.hasMany(Comment)
Poll.hasOne(User)

PollOption.hasOne(Poll)

User.hasMany(Comment)
User.hasMany(Job)
User.hasMany(Poll)
User.hasMany(Story)