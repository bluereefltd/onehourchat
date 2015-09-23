Template.messagesList.onCreated(function () {

    Session.set("autoScroll", true);
    this.subscribe("messages");

});


Template.messagesList.helpers({

    messages: function () {

        return Messages.find({}, {sort: {createdAt: 1}});
    }

});

Template.messagesList.events({
    'scroll, touchmove, mousewheel': function (e, t) {

        // Sugar coating: stops autoscroll to bottom when new message if user has scrolled
        // Get back autoscroll if we are at the bottom of the page

        var messages = $('#messages');
        if (messages.scrollTop() + messages.innerHeight() >= messages.prop('scrollHeight') - 20)  {
            Session.set("autoScroll", true);
        } else {
            Session.set("autoScroll", false);
        }
    }
});

Template.message.onRendered(function () {

    if (Session.get("autoScroll")) {
        scrollToBottom();
    }

});

Template.message.helpers({

    formattedDate: function () {

        return moment(this.createdAt).format("MMM Do YY, h:mm:ss a");
    },

    ownCommentClass: function () {

        var user = Meteor.user();
        if (!user) return;
        return (user.username === this.author) ? 'own' : '';
    }

});