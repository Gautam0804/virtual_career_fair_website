import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div>
      {/* Chat Messages */}
      <div className="overflow-y-auto max-h-60 mb-4 p-2 border border-gray-300 rounded-lg">
        {messages.map((message, index) => (
          <div key={index} className="text-left mb-2">
            <p className="bg-gray-200 p-2 rounded-md">{message}</p>
          </div>
        ))}
      </div>

      {/* Input Message */}
      <div className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md w-full"
          value={newMessage}
          onChange={handleMessageChange}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
