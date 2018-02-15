var ami = new require('asterisk-manager')('5038','172.30.4.31','rcx','s3rv1c0s##!,', true);

ami.keepConnected();

// Listen for any/all AMI events.
ami.on('managerevent', function(evt) {
	console.log(evt);
});
//
