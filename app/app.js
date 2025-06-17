const socket = io();
// this is a socket program
const chatForm = document.getElementById('chat-form');
const msgInput = document.getElementById('msg-input');
const chatBox = document.getElementById('chat-box');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = msgInput.value;
  if (msg.trim()) {
    socket.emit('chat message', msg);
    msgInput.value = '';
  }
});

socket.on('chat message', (msg) => {
  const div = document.createElement('div');
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
});
