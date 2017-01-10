# Express & mongoose REST API Boilerplate - port to plain ES6 without Babel and Bluebird

This is a simple and straightforward port of the excellent
[express-mongoose-es6-rest-api](https://github.com/KunalKapadia/express-mongoose-es6-rest-api) project.

Changes:

* Not using Babel and Bluebird but plain ES6, as supported by ```node``` version 6.9.x; this means there is also no
```gulp serve``` process anymore, simplifying and speeding up the development process

* I ported the ```gulpfile.babel.js``` file to a ```gulpfile.js``` file (plain ES6) and stripped it down to just the
production "build" command, the other commands (```gulp serve```) aren't needed anymore because we're not using Babel.

* I took out the code coverage tools (further simplifying the toolchain)

* it's based on ES6 (also known as ECMAScript 2015), so using Arrow functions, Promises and so on (but not ES6 style
import/export). This means it will work only with newer node.js versions (I'm using and recommending node.js v.6.9)

* it uses ABSOLUTE paths for importing modules, so instead of ```User = require('../models/user')``` we simply
use User = require('models/user') - simpler and less error-prone (and it allows you to more easily move modules to
a different directory as part of a refactoring); the absolute paths are made possible by setting the NODE_PATH variable
in the startup scripts

## Building the app and running in production with pm2

Building the app is done as described in the
[original](https://github.com/KunalKapadia/express-mongoose-es6-rest-api#deployment) docs.

When serving the app with ```pm2``` I ran into a few problems which I solve by adding a ```pm2.json``` file with
startup options for ```pm2``` (for instance: the ```NODE_ENV``` and ```NODE_PATH```). To start the app, you should use
the following commands:

```
# move into the dist directory you've copied - THIS IS IMPORTANT, PM2 NEEDS TO BE RUN FROM WITHIN THE DIST DIRECTORY !!
cd dist
pm2 start pm2.json
```

When you install a new version (changing the ```dist``` files), you need to manually stop/restart the app.

Alternatively you could change the option ```watch``` in the ```pm2.json``` file from ```false``` to ```true```
(haven't tried that myself though).

```pm2``` also allows you to start the app automatically when the server (re)starts, haven't tried that out however.

## More info

For more information, including how to install and use the starter, I refer to the
[original](https://github.com/KunalKapadia/express-mongoose-es6-rest-api) documentation.
