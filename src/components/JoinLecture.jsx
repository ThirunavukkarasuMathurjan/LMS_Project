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
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 relative max-w-lg">
        <button
          className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-800"
          onClick={handleClose}
        >
          ✖
        </button>
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Join Lecture
        </h2>
        <form onSubmit={handleJoin} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Lecture Code"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={lectureCode}
              onChange={(e) => setLectureCode(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
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
  const [sharingScreen, setSharingScreen] = useState(false);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "You" }]);
      setMessage("");
    }
  };

  const toggleScreenShare = async () => {
    if (screenShared) {
      setScreenShared(false);
      setSharingScreen(null); // Stop the current screen share
    } else {
      try {
        // Request screen sharing with both video and audio
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: true, // Add audio capture
        });

        setScreenShared(true);
        setSharingScreen(stream);

        // Start recording the screen share (if needed)
        startRecording(stream);
      } catch (err) {
        console.error("Error sharing screen: ", err);
      }
    }
  };

  const toggleWhiteboard = () => {
    setWhiteboard(!whiteboard);
  };

  const confirmLeave = () => {
    if (window.confirm("Are you sure you want to leave the lecture?")) {
      window.location.reload();
    }
  };

  let mediaRecorder;
  let recordedChunks = [];

  const startRecording = (stream) => {
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      downloadRecording(url);
    };

    mediaRecorder.start();
  };

  const downloadRecording = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "screen-recording.webm";
    link.click();
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }

    if (sharingScreen) {
      sharingScreen.getTracks().forEach((track) => track.stop());
      setScreenShared(false);
      setSharingScreen(null);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="p-4 bg-gray-800 flex justify-between items-center shadow-lg">
        <h2 className="text-xl font-bold">Lecture Code: {code}</h2>
        <button
          className="bg-red-600 px-6 py-3 rounded-lg text-lg hover:bg-red-700 transition duration-300"
          onClick={confirmLeave}
        >
          Leave Lecture
        </button>
      </div>
      <div className="flex flex-grow">
        <div className="flex-grow flex items-center justify-center bg-gray-700">
          {whiteboard ? (
            <Whiteboard fullScreen={true} />
          ) : screenShared ? (
            <p className="text-xl">Screen Sharing in Progress...</p>
          ) : (
            <p className="text-xl">Live Video Stream (Placeholder)</p>
          )}
        </div>
        <div className="w-1/4 p-6 bg-gray-800">
          <h3 className="text-lg font-semibold mb-4">Chat</h3>
          <div className="h-72 overflow-y-auto bg-gray-700 p-4 rounded-lg">
            {messages.map((msg, index) => (
              <p key={index} className="text-sm text-gray-200 mb-2">
                <strong>{msg.sender}:</strong> {msg.text}
              </p>
            ))}
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-700 text-white"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="ml-4 bg-blue-600 px-6 py-3 rounded-lg text-lg text-white hover:bg-blue-700 transition duration-300"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-800 flex justify-center gap-6">
        <button
          className="bg-green-500 px-6 py-3 rounded-lg text-lg flex items-center hover:bg-green-600 transition duration-300"
          onClick={toggleScreenShare}
        >
          {screenShared ? (
            <MdStopScreenShare className="mr-2 text-xl" />
          ) : (
            <MdScreenShare className="mr-2 text-xl" />
          )}
          {screenShared ? "Stop Sharing" : "Share Screen"}
        </button>
        <button
          className="bg-yellow-500 px-6 py-3 rounded-lg text-lg hover:bg-yellow-600 transition duration-300"
          onClick={toggleWhiteboard}
        >
          {whiteboard ? "Close Whiteboard" : "Open Whiteboard"}
        </button>
      </div>
    </div>
  );
}

export default JoinLecture;
