Dim connector, parentId
' Creating connector
Set connector = GetObject("script:file:..\\Shell.Connector.wsc")
' Receiving server id
parentId = WSH.Arguments.Named("id")
' Showing current id
WSH.StdOut.WriteLine("client id: " + connector.id)
' Starting main loop
Do
	WSH.StdOut.Write("Input text:")
	' Sending message
	If connector.postMessage(parentId,WSH.StdIn.ReadLine()) Then
		WSH.StdOut.WriteLine "Message successfully sent"
	Else
		WSH.StdErr.WriteLine "(!) Error sending message !"
	End If
Loop