Template.messageInput.events({

    'submit form': function (event, template) {

        event.preventDefault();

        var messageInput = event.currentTarget.elements['message'];

        if (messageInput.value === "") return;

        Messages.insert({
            createdAt: new Date(),
            author: Meteor.user().username,
            body: messageInput.value
        });

        messageInput.value = "";

        Session.set("autoScroll", true);
        scrollToBottom();

    },

    'focus input[name="message"]': function () {

        if (Session.get("autoScroll")) {
            if (Meteor.isCordova) {
                // Give some time for the device to open keyboard...
                // Should be listening to keyboard events...
                Meteor.setTimeout(function () {
                    scrollToBottom();
                }, 200);
            } else {
                scrollToBottom();
            }
        }

    },

    'click #login-welcome': function () {
        $("#login-sign-in-link").click();
    },

    'click #take-picture': function () {

        MeteorCamera.getPicture({correctOrientation: true}, function (error, data) {

            if (!error) {
                Messages.insert({
                    createdAt: new Date(),
                    author: Meteor.user().username,
                    picture: resizeImage(data)
                });
            }

            Session.set("autoScroll", true);

        });
    }

});