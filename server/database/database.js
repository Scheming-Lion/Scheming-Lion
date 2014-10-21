var Sequelize = require('sequelize');
// var sequelize = new Sequelize("lionbase", "bc8fa3955e6d18", "83511e40", {
//   host: 'us-cdbr-azure-west-a.cloudapp.net'
// });
var sequelize = new Sequelize("lionbase", "root", "zelda", {
  host: 'localhost'
});

// Possibly add Unique to each of the id's?
var Story = sequelize.define('Story', {
  by: Sequelize.STRING,
  id: {type: Sequelize.INTEGER, primarykey: true},
  kids: Sequelize.TEXT,
  score: Sequelize.INTEGER,
  time: Sequelize.INTEGER,
  title: Sequelize.STRING,
  type: Sequelize.STRING,
  url: Sequelize.STRING
});


var Comment = sequelize.define('Comment', {
  id: {type: Sequelize.INTEGER, primarykey: true},
  title: Sequelize.STRING,
  createdAtHN: Sequelize.INTEGER,
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
  createdAtHN: Sequelize.INTEGER,
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
  createdAtHN: Sequelize.INTEGER,
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
  createdAtHN: Sequelize.INTEGER,
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
  createdAtHN: Sequelize.INTEGER,
  delay: Sequelize.INTEGER,
  karma: Sequelize.INTEGER,
  submitted: Sequelize.TEXT
});

Promise.promisifyAll(Story);
Promise.promisifyAll(Comment);
Promise.promisifyAll(Job);
Promise.promisifyAll(Poll);
Promise.promisifyAll(PollOption);
Promise.promisifyAll(User);

var findOrCreateUser = function(username) {
  return User
    .findOrCreate({ where: { id: username } })
      .then( function( user, created ) {
        return Promise.resolve(user[0].dataValues);
      } );
};

var findOrCreatePoll = function(poll) {
  return Poll
    .findOrCreate({ where: { id: poll } })
      .then( function( user, created ) {
        return Promise.resolve(user[0].dataValues);
      } );
};

var findOrCreateStory = function(story) {
  return Story
    .findOrCreate({ where: { id: story } })
      .then( function( user, created ) {
        return Promise.resolve(user[0].dataValues);
      } );
};

Promise.promisifyAll(findOrCreateUser);

module.exports.createStories = function(stories) {
  Story.bulkCreate(stories)
    .then( function() {
      Story.findAll()
        .then(function(addedStories) {
          console.log(addedStories);
        });
    });
};

Promise.promisifyAll(module.exports.createStories);

module.exports.createItem = function(data) {
  findOrCreateUser(data.by)
    .then(function(user) {
      if (data.type === 'story') {
        console.log("hit");
        Story
          .create({
            id: data.id,
            title: data.title,
            createdAtHN: data.time,
            kids: JSON.stringify(data.kids),
            url: data.url,
            score: data.score,
            deleted: data.deleted,
            dead: data.dead
          })
          .then(function(story) {
            console.log('story created');
          });
      } else if (data.type === 'comment') {
        Comment
          .create({
            id: data.id,
            title: data.title,
            createdAtHN: data.time,
            text: data.text,
            kids: JSON.stringify(data.kids),
            url: data.url,
            score: data.score,
            deleted: data.deleted,
            dead: data.dead,
            UserId: user.id,
            PollId: data.parent, // This is wrong
            StoryId: data.parent // This is wrong
          })
          .then(function(comment) {
            console.log('comment created');
          });
      } else if (data.type === 'job') {
        Job
          .create({
            id: data.id,
            title: data.title,
            createdAtHN: data.time,
            kids: JSON.stringify(data.kids),
            url: data.url,
            score: data.score,
            deleted: data.deleted,
            dead: data.dead,
            UserId: user.id
          })
          .then(function(job) {
            console.log('job created');
          });
      } else if (data.type === 'poll') {
        Poll
          .create({
            id: data.id,
            title: data.title,
            createdAtHN: data.time,
            parts: data.parts,
            text: data.text,
            kids: JSON.stringify(data.kids),
            url: data.url,
            score: data.score,
            deleted: data.deleted,
            dead: data.dead,
            UserId: user.id
          })
          .then(function(poll) {
            console.log('poll created');
          });
      } else if (data.type === 'polloption') {
        PollOption
          .create({
            id: data.id,
            title: data.title,
            createdAtHN: data.time,
            kids: JSON.stringify(data.kids),
            url: data.url,
            score: data.score,
            deleted: data.deleted,
            dead: data.dead,
            PollId: data.parent, // This is wrong.
            UserId: user.id
          })
          .then(function(polloption) {
            console.log('polloption created');
          });
      }
    });
};


////////////////////////////////////////////////
//Based on the Firebase structure, most data
//already exists in each table without the
//need to add additional relationships.
//However, here are some tradition relationships
//that we have identified for possible future
//use.
////////////////////////////////////////////////

// Story.hasOne(User, {foreignKey: 'id'});
// Story.hasMany(Comment, {as: 'Comments'});

// Poll.hasMany(PollOption, {as: 'PollOptions'});
// Poll.hasMany(Comment, {as: 'Comments'});

// User.hasMany(Comment, {as: 'Comments'});
// User.hasMany(Job, {as: 'Jobs'});
// User.hasMany(Poll, {as: 'Polls'});
// User.hasMany(PollOption, {as: 'PollOptions'});
// User.hasMany(Story, {as: 'Stories'});

// Story.sync();
// Comment.sync();
// Job.sync();
// Poll.sync();
// PollOption.sync();
// User.sync();

sequelize
  .sync({ force: true })
  .complete(function(err) {
    if (!!err) {
      console.log('An error occured:', err);
    } else {
      console.log('Success!');
    }
  });