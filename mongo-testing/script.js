var mongojs = require('mongojs');
var db = mongojs('mydb', ['issues', 'users']);
// var db = mongojs('username:password@localhost/mydb', ['issues', 'users']);

// db.issues.find({status:{$gt:2}}, function(err, data) {
//     console.log(data);
//     db.close();
// });

// db.users.insert({
//     name: "Myat Su Mon",
//     role: "Developer"
// }, function() {
//     db.close();
// });

// db.users.remove({
//     _id: mongojs.ObjectId("60152c791f36cd2bf1809d16")
// }, function() {
//     db.close();
// });

// db.users.update(
//     {role: "Developer"},
//     {$set: {role: "Web Developer"}},
//     {multi: true},
//     function() {
//         db.close();
//     }
// );

// db.users.find(function(err, data) {
//     console.log(data);
//     db.close();
// });

db.issues.createIndex({subject:"text"}, {}, function() {
    db.close();
});

db.issues.runCommand("text", {search: "menu"}, function(err, result) {
    console.log(result);
    db.close();
});