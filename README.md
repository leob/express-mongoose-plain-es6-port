# Express & mongoose REST API Boilerplate - port to plain ES6 without Babel and Bluebird

This is a simple and straightforward port of the excellent
[express-mongoose-es6-rest-api](https://github.com/KunalKapadia/express-mongoose-es6-rest-api) project.

Changes:

* Not using Babel and Bluebird but plain ES6, as supported by ```node``` version 6.9.x; this means there is also no
```gulp``` build process anymore, simplifying and speeding up the development process

* I took out the code coverage tools (further simplifying the toolchain); I still need to verify if the unit tests
(Mocha/Chai) still work

* it's based on ES6 (also known as ECMAScript 2015), so using Arrow functions, Promises and so on (but not ES6 style
import/export). This means it will work only with newer node.js versions (I'm using and recommending node.js v.6.9)

* it uses ABSOLUTE paths for importing modules, so instead of ```User = require('../models/user')``` we simply
use User = require('models/user') - simpler and less error-prone (and it allows you to more easily move modules to
a different directory as part of a refactoring); the absolute paths are made possible by setting the NODE_PATH variable
in the startup scripts
