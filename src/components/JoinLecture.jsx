import React, { useState } from 'react';

function JoinLecture() {
  const [lectureCode, setLectureCode] = useState('');
  const [password, setPassword] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    if (lectureCode && password) {
      setJoined(true);
    } else {
      alert('Please enter a valid code and password.');
    }
  };

  const handleClose = () => {
    window.location.href = '/';  // Navigates to the home page
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
        <h2 className="text-2xl font-semibold text-center mb-4">Join Lecture</h2>
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
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold">Lecture Room</h2>
      <p className="text-lg mt-2">Lecture Code: {code}</p>
      <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg">
        <p className="text-lg">Live video stream (Placeholder)</p>
        <div className="mt-4 w-64 h-40 bg-gray-700 flex items-center justify-center rounded-lg">
          <span>Video Feed</span>
        </div>
      </div>
      <button className="mt-6 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => window.location.reload()}>
        Leave Lecture
      </button>
    </div>
  );
}

export default JoinLecture;
