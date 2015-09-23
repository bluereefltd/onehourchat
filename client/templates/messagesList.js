Template.messagesList.onCreated(function() {

    this.subscribe("messages");

});


Template.messagesList.helpers({

    messages: function () {

        return Messages.find({}, {sort: {createdAt: 1}});
    }

});

Template.message.onRendered(function() {

    scrollToBottom();

});