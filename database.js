var Sequelize = require('sequelize');

var Story = sequelize.define('Story', {
  id: Sequelize.INTEGER
  deleted: Sequelize.BOOLEAN,
  by: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  text: Sequelize.STRING,
  dead: Sequelize.BOOLEAN,
  //figure out how to use array
  kids: Sequelize.ARRAY(Sequelize.STRING),
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  title: Sequelize.STRING
});

var Comment = sequelize.define('Comment', {
  id: Sequelize.INTEGER
  deleted: Sequelize.BOOLEAN,
  by: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  text: Sequelize.STRING,
  dead: Sequelize.BOOLEAN,
  //figure out how to use array
  kids: Sequelize.ARRAY(Sequelize.INTEGER),
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  title: Sequelize.STRING
});

var Job = sequelize.define('Job', {
  id: Sequelize.INTEGER
  deleted: Sequelize.BOOLEAN,
  by: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  text: Sequelize.STRING,
  dead: Sequelize.BOOLEAN,
  //figure out how to use array
  kids: Sequelize.ARRAY(Sequelize.INTEGER),
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  title: Sequelize.STRING
});

var Poll = sequelize.define('Poll', {
  id: Sequelize.INTEGER
  deleted: Sequelize.BOOLEAN,
  by: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  text: Sequelize.STRING,
  dead: Sequelize.BOOLEAN,
  //figure out how to use array
  kids: Sequelize.ARRAY(Sequelize.INTEGER),
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  title: Sequelize.STRING
});

var Pollopt = sequelize.define('Pollopt', {
  id: Sequelize.INTEGER
  deleted: Sequelize.BOOLEAN,
  by: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  text: Sequelize.STRING,
  dead: Sequelize.BOOLEAN,
  //figure out how to use array
  kids: Sequelize.ARRAY(Sequelize.INTEGER),
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  title: Sequelize.STRING,
  parts: Sequelize.ARRAY(Sequelize.INTEGER)
});

var User = sequelize.define('User', {
  id: {type: Sequelize.STRING, unique: true, primarykey: true},
  delay: Sequelize.INTEGER,
  createdAt: Sequelize.INTEGER,
  karma: Sequelize.INTEGER,
  about: Sequelize.STRING,
  submitted: Sequelize.ARRAY(Sequelize.INTEGER)
});