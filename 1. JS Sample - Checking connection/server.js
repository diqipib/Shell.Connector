// Creating WScript.Shell for starting new processes
var wshShell = new ActiveXObject('WScript.Shell'),
	// Creating connector
	connector = GetObject("script:file:..\\shell.Connector.wsc");
// Showing current connector id
WSH.StdOut.WriteLine('server id:' + connector.id);
WSH.StdOut.WriteLine('Try to close client or server window...');
var clientId
connector.onmessage = function(id,data){
	clientId = id
	WSH.StdOut.WriteLine("Client with " + id + " connected !")
}
// Creating client
wshShell.Run('cmd /c chcp 1251>nul && cscript //nologo client.js /id:"' + connector.id + '" && pause');
// Starting loop
while(-1){
	if(clientId){
		if(!connector.connect(clientId)){
			WSH.StdOut.WriteLine("Client " + clientId + " disconnected !");
			WSH.Quit();
		}
	}
	WSH.Sleep(100);
}