scrollToBottom = function () {

    var messages = $('#messages');
    messages.scrollTop(messages.prop('scrollHeight'));
};

resizeImage = function (data) {

    var width = 240;
    var image = new Image();
    image.src = data;
    var canvas = document.getElementById("camera");
    var height = width * image.height / image.width;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(image, 0, 0, width, height);
    return canvas.toDataURL("image/jpg", 0.7);
};

Template.registerHelper("loginReady", function () {

    return (Accounts && Accounts.loginServicesConfigured());
});