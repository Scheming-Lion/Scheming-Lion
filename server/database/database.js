var Sequelize = require('sequelize');

// AZUREWEBSITE IMPLEMENTATION
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

// LOCAL HOST IMPLEMENTATION
// var sequelize = new Sequelize("lionbase", "root", "zelda", {
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
  id: {type: Sequelize.INTEGER, primarykey: true},
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
    console.log("creating");
    console.log("length: " + items.length);

    for (var start = 0; start < items.length; start+=1000) {
      var end = start + 1000;

      if (end > items.length) {
        end = items.length;
      }
      
      var subItems = items.slice(start, end);

      itemName.bulkCreate(subItems);
        // .success(function() {
        //   itemName.findAll()
        //     .success(function(addedItems) {
        //       console.log( "items created: " + addedItems.length );
        //     });
        // });
         
    }

  }
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

sequelize.sync();

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