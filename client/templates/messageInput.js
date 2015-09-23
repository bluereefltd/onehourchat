Template.messageInput.events({

    'submit form': function (event, template) {

        event.preventDefault();

        var messageInput = event.currentTarget.elements['message'];

        Messages.insert({
            createdAt: new Date(),
            author: Meteor.user().username,
            body: messageInput.value
        });

        messageInput.value="";

        scrollToBottom();

    },

    'click #login-welcome': function () {
        $("#login-sign-in-link").click();
    }

});