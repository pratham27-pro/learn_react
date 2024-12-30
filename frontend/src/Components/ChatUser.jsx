import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { FaUser, FaPaperPlane, FaSmile, FaPaperclip, FaMoon, FaSun, FaSearch } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const messagesEndRef = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://localhost:5173");

    socket.current.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      playNotificationSound();
    });

    socket.current.on("users", (users) => {
      setUsers(users);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newMessage = {
        user: currentUser,
        content: inputMessage,
        timestamp: new Date().toISOString(),
      };
      socket.current.emit("sendMessage", newMessage);
      setInputMessage("");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Implement file upload logic here
      console.log("File uploaded:", file.name);
    }
  };

  const playNotificationSound = () => {
    const audio = new Audio("/notification-sound.mp3");
    audio.play();
  };

  const handleEmojiClick = (emojiObject) => {
    setInputMessage((prevInput) => prevInput + emojiObject.emoji);
  };

  const filteredMessages = messages.filter((message) =>
    message.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"}`}>
      <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Online Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="flex items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded">
              <FaUser className="mr-2" />
              <span>{user.name}</span>
              <span className="ml-auto w-3 h-3 bg-green-500 rounded-full"></span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Real-Time Chat</h1>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search messages..."
                className="border rounded py-1 px-2 pr-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute right-2 top-2 text-gray-400" />
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {filteredMessages.map((message, index) => (
            <div key={index} className="mb-4 flex">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                {message.user.name[0]}
              </div>
              <div>
                <div className="font-bold">{message.user.name}</div>
                <div className="bg-gray-100 rounded p-2">{message.content}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSendMessage} className="bg-white p-4 flex items-center">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border rounded-l py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="bg-gray-200 p-2 hover:bg-gray-300"
          >
            <FaSmile />
          </button>
          <label className="bg-gray-200 p-2 hover:bg-gray-300 cursor-pointer">
            <FaPaperclip />
            <input type="file" className="hidden" onChange={handleFileUpload} />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600"
          >
            <FaPaperPlane />
          </button>
        </form>
        {showEmojiPicker && (
          <div className="absolute bottom-16 right-4">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;