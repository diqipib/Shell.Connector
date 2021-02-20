// Creating connector
var connector = GetObject("script:file:..\\Shell.Connector.wsc"),
	// Receiving server id
	parentId = WSH.Arguments.Named("id");
// Showing current id
WSH.StdOut.WriteLine('client id:' + connector.id);
// Starting main loop
while(-1){
	WSH.StdOut.Write("Input text:");
	// Sending message
	if(connector.postMessage(parentId,WSH.StdIn.ReadLine())){
		WSH.StdOut.WriteLine('Message successfully sent');
	} else {
		WSH.StdErr.WriteLine('(!) Error sending message !');
	}
	WSH.Sleep(100);
}