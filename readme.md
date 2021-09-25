__Methods__

postMessage(connectorId,data) - Method for sending messages to destination connector in other process<br>
-                  connectorId <in>   [String] - destination connector id</div><br>
-                  data            <in>   [String] - object / string / number / etc...<br>
connect(connectorId) - Method for checking connection with destination connector<br>
-                  connectorId <in>   [String] - destination connector id


__Properties__

id <readonly>   [String] - Current connector id

onmessage  <in>    [Object] - Callback function handler
                              Handler accepts 2 params when event fires - connectorId, data


