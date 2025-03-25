import React, { useState } from "react";
import { MdScreenShare, MdStopScreenShare } from "react-icons/md";
import Whiteboard from "./Whiteboard";

function JoinLecture() {
  const [lectureCode, setLectureCode] = useState("");
  const [password, setPassword] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    if (lectureCode && password) {
      setJoined(true);
    } else {
      alert("Please enter a valid code and password.");
    }
  };

  const handleClose = () => {
    window.location.href = "/"; // Navigates to the home page
  };

  if (joined) {
    return <LectureRoom code={lectureCode} />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-xl text-gray-600"
          onClick={handleClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Join Lecture
        </h2>
        <form onSubmit={handleJoin} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Lecture Code"
            className="w-full px-3 py-2 border rounded-lg"
            value={lectureCode}
            onChange={(e) => setLectureCode(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-3 py-2 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Join Lecture
          </button>
        </form>
      </div>
    </div>
  );
}

function LectureRoom({ code }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [screenShared, setScreenShared] = useState(false);
  const [whiteboard, setWhiteboard] = useState(false);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "You" }]);
      setMessage("");
    }
  };

  const toggleScreenShare = () => {
    setScreenShared(!screenShared);
  };

  const toggleWhiteboard = () => {
    if (whiteboard) {
      if (window.confirm("Are you sure you want to close the Whiteboard?")) {
        setWhiteboard(false);
      }
    } else {
      setWhiteboard(true);
    }
  };

  const confirmLeave = () => {
    if (window.confirm("Are you sure you want to leave the lecture?")) {
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-900 text-white">
      <div className="p-4 bg-gray-800 flex justify-between items-center">
        <h2 className="text-xl font-bold">Lecture Code: {code}</h2>
        <button
          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={confirmLeave}
        >
          Leave Lecture
        </button>
      </div>
      <div className="flex flex-grow">
        <div className="flex-grow flex items-center justify-center bg-gray-700">
          {whiteboard ? (
            <Whiteboard />
          ) : screenShared ? (
            <p className="text-lg">Screen Sharing in Progress...</p>
          ) : (
            <p className="text-lg">Live Video Stream (Placeholder)</p>
          )}
        </div>
        <div className="w-1/4 p-4 bg-gray-800">
          <h3 className="text-lg font-semibold mb-2">Chat</h3>
          <div className="h-64 overflow-y-auto bg-gray-700 p-2 rounded-lg">
            {messages.map((msg, index) => (
              <p key={index} className="p-1 text-sm">
                <strong>{msg.sender}:</strong> {msg.text}
              </p>
            ))}
          </div>
          <div className="mt-2 flex">
            <input
              type="text"
              className="flex-grow px-2 py-1 border rounded-lg bg-gray-600 text-white"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="ml-2 bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-800 flex justify-center gap-4">
        <button
          className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 flex items-center"
          onClick={toggleScreenShare}
        >
          {screenShared ? (
            <MdStopScreenShare className="mr-2" />
          ) : (
            <MdScreenShare className="mr-2" />
          )}
          {screenShared ? "Stop Sharing" : "Share Screen"}
        </button>
        <button
          className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600"
          onClick={toggleWhiteboard}
        >
          {whiteboard ? "Close Whiteboard" : "Open Whiteboard"}
        </button>
      </div>
    </div>
  );
}

export default JoinLecture;