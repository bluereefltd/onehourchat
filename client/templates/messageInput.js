Template.messageInput.events({

    'submit form': function (event, template) {

        event.preventDefault();

        var messageInput = event.currentTarget.elements['message'];

        Messages.insert({
            createdAt: new Date(),
            author: 'Julien',
            body: messageInput.value
        });

        messageInput.value="";

        scrollToBottom();

    }

});