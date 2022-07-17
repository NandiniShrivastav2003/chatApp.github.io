let socket=io();
$('#login').show();
$('.chat-room').hide();
$('#join').click(()=>{
    socket.emit('login',{
        username: $('#login-id').val(),
        password: $('#login-pass').val()
    })
})

socket.on('logged-in',()=>{
    $('#login').hide();
    $('.chat-room').show();

})
socket.on('login-failed',()=>{
    window.alert("incorrect username/password");
})
$('#btnSend').click(()=>{
    socket.emit('msg-send',{
        to:$('#inpTouser').val(),
        msg:$('#newmsg').val()
    })
})
socket.on('msg_rcvd',(data)=>{
$('#ulMsgList').append($('<li>').text(`[${data.from}] ${data.msg}`))
})