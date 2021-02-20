// Creating WScript.Shell for starting new processes
var wshShell = new ActiveXObject('WScript.Shell'),
	// Creating connector
	connector = GetObject("script:file:..\\shell.Connector.wsc");
// Showing current connector id
WSH.StdOut.WriteLine('server id:' + connector.id);
// Attaching event handler
connector.onmessage = function(connectorId, data){
	WSH.StdOut.WriteLine('Message "' + data + '" from connector "' + connectorId + '"')
}
// Creating 2 clients
for(var i=1;i <= 2;i++){
	wshShell.Run('cmd /c chcp 1251>nul && cscript //nologo client.js /id:"' + connector.id + '"');
}
// Starting loop
while(-1){
	WSH.StdOut.WriteLine('Waiting for messages...');
	WSH.Sleep(1000);
}