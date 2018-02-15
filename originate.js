var ami = new require('asterisk-manager')('5038','172.30.4.31','rcx','s3rv1c0s##!,', true);

// In case of any connectiviy problems we got you coverd.
ami.keepConnected();
//
// // Listen for any/all AMI events.
// ami.on('managerevent', function(evt) {});
//
// // Listen for specific AMI events. A list of event names can be found at
// // https://wiki.asterisk.org/wiki/display/AST/Asterisk+11+AMI+Events
// ami.on('hangup', function(evt) {});
// ami.on('confbridgejoin', function(evt) {});
//
// // Listen for Action responses.
// ami.on('response', function(evt) {});
//
// // Perform an AMI Action. A list of actions can be found at
// // https://wiki.asterisk.org/wiki/display/AST/Asterisk+11+AMI+Actions
ami.action({
   'action':'originate',
   'channel':'SIP/9303',
   'context':'default',
   'exten':1234,
   'priority':1,
   'variable':{
   	'name1':'value1',
        'name2':'value2'
   }
}, function(err, res) {
	console.log(res);

});
