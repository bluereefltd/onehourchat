Messages = new Mongo.Collection('messages');

Messages.allow({
    insert: function (userId, msg) {
        return (Meteor.users.findOne(userId).username === msg.author);
    },
    update: function () {
        return false;
    },
    remove: function () {
        return false;
    }
});
