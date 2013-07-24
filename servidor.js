var server = require("socket.io").listen(6969);
 
server.sockets.on("connection", function(message)
{
    message.on("newMessage", function(data)
    {
        server.sockets.emit("sendEvent", data);
    });
});
