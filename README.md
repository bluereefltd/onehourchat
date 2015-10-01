# The one-hour Meteor chat
This is a tutorial to build a simple chat application in less than 60 minutes using Meteor.

This tutorial application is voluntarily focused on mobile and includes:
- user login with username
- instant message updates
- send pictures to chat with phone camera or laptop webcam

You can see the app live here:
http://onehourchat.meteor.com

Taking pictures is possible both on desktop and mobile thanks to the mdg:camera package.

*Notes:*
- *The package I am actually using is a fork of mdg:camera and fixes a bug so that you can use the camera on a mobile browser as well without Cordova.
(there is a permission issue in the original package).*
- *When you check out step-9, there is a fix for step-6 -> There should have been a check on error when the MeteorCamera.getPicture callback is fired.*

## Downloading the code and start following the tutorial

```
git clone https://github.com/bluereefltd/onehourchat.git
git checkout -f step-0
```

## Checking out a tutorial step
```
git checkout -f step-N
meteor    // or meteor run android-device
```

## Tutorial structure

There are 10 steps, from 0 to 9.
This has been designed as part of an introduction to meteor presentation.

This presentation is publicly available [here](http://blue-reef.net/presentations/meteor-introduction/index.html).

I am planning to write a blog article to guide you through the tutorial but for now you can look at the git diffs to follow the progression between each step.

##step-0: Project file structure##

- Project structure with styles.less file (so that we can focus on Meteor, not css), mdg:camera custom package and lib.js (tool for manipulating image and autoscrolling), meteor logo
- Introduction to directory structure (client / server / public / other)

##step-1: Basic ui structure and mobile build##

- Add semantic:ui-css, less and bluereef:camera packages
- Add menu bar and main structure without templates

- Build mobile application and run it on iOS emulator and device.

```
meteor add-platform ios
meteor run ios-device

meteor add-plaftorm android
meteor run android-device
```
*Now you can see that hot code reload works also on the mobile app -> no need to go through app market updates.*
- Introduction to debugging mobile app using chrome:
```
chrome://inspect
```

##step-2: Introduction to templates##
- Messages templates
- Template helper

##step-3: Introduction to collections##
- Declare messages collection, simple messages template with display of text, date
- Use command line to insert new message
- Show how you can query the collection

##step-4: Adding new message input##
- Input template with action buttons
- Insert collection on form submit event
- Scroll to bottom when entering new message
- Scroll when loading new message

##step-5: Users##
- Introduction to accounts package
- Add accounts-password and accounts-ui
- Add login menu in menu bar
- Accounts config: Username only
- Add user to newly created message
- Hide input template when user not logged in.
- Add welcome to login message

##step-6: Camera##
- Add picture button on form
- Add event on click and get the picture
- Save picture with new message
- Update message template to display picture

##step-7: Security##
- Delete message from command line
- Remove insecure package
- Add allow / deny rules in Messages collection

##step-8: Publications##
- Remove autopublish
- Add publication
- Subscribe to new publication
- Limit number of messages sent to client

##step-9: Finishing touch and exercises##
- Improve date formatting (with momentjs:moment)
- Put own chat messages on the right of the window to make them stand out
- Don’t scroll when user has moved the message list
- Prevent empty messages
- Get message list to scroll to bottom when opening keyboard on mobile


