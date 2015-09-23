Package.describe({
  name: "bluereef:camera",
  summary: "Photos with one function call on desktop and mobile. Fork of mdg:camera with bug fix for mobile.",
  version: "1.0.0"
});

Cordova.depends({
  "org.apache.cordova.camera":"0.3.2"
});

Package.onUse(function(api) {
  api.export('MeteorCamera');
  api.use(["templating", "session", "ui", "blaze", "less@1.0.0||2.0.0", "reactive-var"]);
  api.versionsFrom("METEOR@0.9.2");

  api.addFiles('photo.html');
  api.addFiles('photo.js');
  api.addFiles("camera.less", ["web.browser"]);
  api.addFiles('photo-browser.js', ['web.browser']);
  api.addFiles('photo-cordova.js', ['web.cordova']);
});
