Template.messagesList.helpers({

    messages: function () {

        return Messages.find();
    }

});

Template.message.onRendered(function() {

    scrollToBottom();

});