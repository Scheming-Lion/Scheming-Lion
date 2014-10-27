var Sequelize = require('sequelize');
var credential = require('./databaseConfig.js');


var databaseName = process.env.DB_NAME || credential.databaseName;
var username = process.env.DB_USERNAME || credential.username;
var password = process.env.DB_PASSWORD || credential.password;

// AZUREWEBSITE IMPLEMENTATION
var sequelize = new Sequelize(databaseName, username, password, {
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

// LOCAL HOST IMPLEMENTATION
// var sequelize = new Sequelize("database", "root", "password", {
//   host: 'localhost',
//   define: {
//     underscored: false,
//     freezeTableName: false,
//     syncOnAssociation: true,
//     charset: 'utf8',
//     collate: 'utf8_general_ci',
//     classMethods: {method1: function() {}},
//     instanceMethods: {method2: function() {}},
//     timestamps: true
//   }
// });

module.exports.Story = sequelize.define('Story', {
  by: Sequelize.STRING,
  id: {type: Sequelize.INTEGER, primarykey: true, unique: true},
  kids: Sequelize.TEXT,
  score: Sequelize.INTEGER,
  time: Sequelize.INTEGER,
  title: Sequelize.STRING,
  type: Sequelize.STRING,
  url: Sequelize.TEXT
});

module.exports.Comment = sequelize.define('Comment', {
  by: Sequelize.STRING,
  id: {type: Sequelize.INTEGER, primarykey: true, unique: true},
  kids: Sequelize.TEXT,
  parent: Sequelize.INTEGER,
  text: Sequelize.TEXT,
  time: Sequelize.INTEGER,
  type: Sequelize.STRING
});

module.exports.Job = sequelize.define('Job', {
  by: Sequelize.STRING,
  id: {type: Sequelize.INTEGER, primarykey: true, unique: true},
  score: Sequelize.INTEGER,
  text: Sequelize.STRING,
  time: Sequelize.INTEGER,
  title: Sequelize.STRING,
  type: Sequelize.STRING,
  url: Sequelize.STRING
});

module.exports.Poll = sequelize.define('Poll', {
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

module.exports.PollOption = sequelize.define('PollOption', {
  by: Sequelize.STRING,
  id: {type: Sequelize.INTEGER, primarykey: true, unique: true},
  kids: Sequelize.TEXT,
  parent: Sequelize.INTEGER,
  score: Sequelize.INTEGER,
  text: Sequelize.TEXT,
  time: Sequelize.INTEGER,
  type: Sequelize.STRING
});

module.exports.User = sequelize.define('User', {
  about: Sequelize.STRING,
  created: Sequelize.INTEGER,
  delay: Sequelize.INTEGER,
  id: {type: Sequelize.STRING, primarykey: true},
  karma: Sequelize.INTEGER,
  submitted: Sequelize.TEXT,
});

module.exports.create = function(itemName, items) {
  if (items.length > 1) {
    if( items[0].type ) {
      console.log("Adding " + items.length + " items to the " + items[0].type + " table." );
    } else {
      console.log("There are " + items.length + " items listed as deleted.");
    }

    for (var start = 0; start < items.length; start+=1000) {
      var end = start + 1000;

      if (end > items.length) {
        end = items.length;
      }
      
      var subItems = items.slice(start, end);

      itemName.bulkCreate(subItems)
        .success(function() {
          console.log("yay");
        })
        .error(function(error) {
          console.log(error);
        });
      // when uncommenting the below code, remember to remove the semicolon
      // at the end of line 126
        // .success(function() {
        //   itemName.findAll()
        //     .success(function(addedItems) {
        //       console.log('addedItems', addedItems);
        //       console.log( addedItems.length + " items added to the " + addedItems.type + " table!" );
        //     });
        // });
         
    }

  }
};

module.exports.updateUser = function(user) {
  console.log("update");
  // console.log(user);
  module.exports.User
    .find({
      where: {
        id: user.id
      }
    })
    .success(function(foundUser) {
      var string = JSON.stringify(user.submitted);
      console.log(user.submitted);
      if (string !== undefined) {
        if (string.length >= 21844) {
          string = string.slice(0, 21844);
        }
      }

      var string2 = "";
      if (string2 !== undefined) {
        if (string2.length >= 255) {
          string2 = string.slice(0, 255);
        }
      }

      foundUser.updateAttributes({
        about: string2,
        created: user.created,
        delay: user.delay,
        karma: user.karma,
        submitted: string
      })
        .success(function() {
          console.log(foundUser.id + " saved!");
        });
    })
    .error(function(error) {
      console.log("error on find");
      console.log(error);
    });
};

sequelize.sync();

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

// RESETS THE ENTIRE DATABASE
// sequelize
//   .sync({ force: true })
//   .complete(function(err) {
//     if (!!err) {
//       console.log('An error occured:', err);
//     } else {
//       console.log('Success!');
//     }
//   });
