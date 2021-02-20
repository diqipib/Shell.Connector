// Creating connector
var connector = GetObject("script:file:..\\Shell.Connector.wsc"),
	// Receiving server id
	parentId = WSH.Arguments.Named("id");
// Showing current id
WSH.StdOut.WriteLine('client id:' + connector.id);
connector.postMessage(parentId, connector.id);
WSH.StdOut.WriteLine('Try to close client or server window...');
// Starting main loop
while(-1){
	// Sending message
	if(!connector.connect(parentId)){
		WSH.StdErr.WriteLine('(!) Server connector closed !');
		WSH.Quit();
	}
	WSH.Sleep(100);
}