//referencias html
const lblOffline = document.querySelector('#lblOffline');
const lblOnline = document.querySelector('#lblOnline');
const textMsg = document.querySelector('#textMsg');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () => {
    lblOffline.style.display = 'none';
    lblOnline.style.display = ''
});

socket.on('disconnect', () => {
    lblOnline.style.display = 'none'
    lblOffline.style.display = '';
});

btnSend.addEventListener('click', () => {
    const text = textMsg.value;
    const payload = {
        text,
        id: '123',
        date: new Date().getTime()
    }
    socket.emit('send-msg', payload, (id) => {
        console.log('desde el server: ', id);
    });
});

socket.on('send-msg', (payload) => {
    console.log(payload);
});