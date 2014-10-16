var Sequelize = require('sequelize');

var Story = sequelize.define('Story', {
  id: Sequelize.STRING,
  deleted: Sequelize.BOOLEAN,
  by: Sequelize.STRING,
  createdAt: Sequelize.INTEGER,
  text: Sequelize.STRING,
  dead: Sequelize.BOOLEAN,
  //figure out how to use array
  kids: Sequelize.ARRAY(Sequelize.STRING),
  url: Sequelize.STRING,
  score: Sequelize.INTEGER,
  title: Sequelize.STRING,
});

var Comment = sequelize.define('Comment', {
});

var Job = sequelize.define('Job', {
});

var Poll = sequelize.define('Poll', {
});

var Pollopt = sequelize.define('Pollopt', {
});

var User = sequelize.define('User', {
});