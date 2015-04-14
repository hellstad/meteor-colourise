Package.describe({
	name: "hellstad:colourise",
	summary: "Design quicker. Click to change any element's colours!",
	version: "0.1.0",
	git: "https://github.com/hellstad/meteor-colourise",
	debugOnly: false
});

Package.onUse(function(api) {
	api.versionsFrom("1.0.1");
	api.use(["meteor", "ddp", "jquery", "mongo", "templating", "session"]);

	serverFiles = [
		"server/colourise.js"
	];

	clientFiles = [
		"client/colourise.css",
		"client/colourise.html",
		"client/colourise.js",
	];

	api.addFiles(serverFiles, "server");
	api.addFiles(clientFiles, "client");

	//api.export("Colourise");
});