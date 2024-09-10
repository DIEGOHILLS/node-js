"use strict";

const messageModule = require("./messages");
messageModule.messages.forEach(m => console.log(m));

//Line 3 imports a module named messages from a file called messages.js
//The require() function is used in Node.js to import modules. The imported module is stored in a constant named messageModule.
//Line 4  loops through each message, and prints them to the console
