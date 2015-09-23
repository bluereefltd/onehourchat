Template.messagesList.helpers({

    messages: function () {

        var messages = [];

        messages.push({
            createdAt: new Date(),
            author: 'Julien',
            body: 'My messages'
        });

        messages.push({
            createdAt: new Date(),
            author: 'Bob',
            body: 'Hello there'
        });

        return messages;
    }

});