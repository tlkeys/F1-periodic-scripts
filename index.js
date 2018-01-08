// This file will house all of our common functions and objects that will be
// used throughout the project, as well as allowing to enable & disable scripts

//Configuration
var scripts = [
	{
		name: "Phone number normalizer",
		location: "./modules/phone",
		enabled: true
	},
	{
		name: "Capitalizer",
		location: "./modules/capitalizer",
		enabled: false
	}
];

//Setup F1 API



//END API setup

//Require modules that will be used
var path = require("path");

var scriptResults = new Map();

for(var i=0;i<scripts.length;i++) {
	if(scripts[i].enabled) {
		scriptResults.set( scripts[i].name , require(path.join(scripts[i].location,"index.js"))(f1api) )
	}
}
