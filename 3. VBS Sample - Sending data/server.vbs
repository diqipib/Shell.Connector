Dim wshShell, connector, i
' Creating WScript.Shell for starting new processes
Set wshShell = CreateObject("WScript.Shell")
' Creating connector
Set connector = GetObject("script:file:..\\shell.Connector.wsc")
' Showing current connector id
WSH.StdOut.WriteLine("server id:" & connector.id)
' Attaching event handler
connector.onmessage = GetRef("connector_onmessage")
Sub connector_onmessage(connectorId, data)
	WSH.StdOut.WriteLine "Message """ + data + """ from connector """ & connectorId & """"
End Sub
' Creating 3 clients
For i = 1 to 3
	wshShell.Run "cmd /c chcp 1251>nul && cscript //nologo client.vbs /id:""" & connector.id & """ && pause"
Next
' Starting loop
Do
	WSH.StdOut.WriteLine "Waiting for messages..."
	WSH.Sleep 1000
Loop