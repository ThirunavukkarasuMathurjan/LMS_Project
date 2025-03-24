import React from "react";

function Module() {
  // Hardcoded course details
  const course = {
    title: "React Development",
    instructor: "John Doe",
  };

  // Hardcoded chapters
  const chapters = [
    {
      title: "Chapter 01",
      lectureNotes: [
        { title: "Lecture 1: Introduction", link: "#" },
        { title: "Lecture 2: Advanced Concepts", link: "#" },
      ],
      referenceBooks: [
        { title: "Learning React", link: "#" },
        { title: "Advanced JavaScript", link: "#" },
      ],
      youtubeVideos: [
        { title: "React Basics", link: "#" },
        { title: "React Hooks Tutorial", link: "#" },
      ],
      assignmentLink: "#",
    },
    {
      title: "Chapter 02",
      lectureNotes: [
        { title: "Lecture 3: State Management", link: "#" },
        { title: "Lecture 4: React Router", link: "#" },
      ],
      referenceBooks: [
        { title: "JavaScript: The Good Parts", link: "#" },
        { title: "React Up and Running", link: "#" },
      ],
      youtubeVideos: [
        { title: "State Management with React", link: "#" },
        { title: "React Router Tutorial", link: "#" },
      ],
      assignmentLink: "#",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      {/* Course Title */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl mb-6">
        <h1 className="text-3xl font-bold text-blue-700">
          {course.title} Module
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          Instructor: {course.instructor}
        </p>
      </div>

      {/* Announcements Box */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl mb-6 text-left">
        <h3 className="text-xl font-semibold text-gray-800">
          📢 Announcements
        </h3>
        <p className="text-gray-600 mt-2">No announcements available.</p>
      </div>

      {/* Discussion and Quiz Buttons */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl mb-6 text-left flex justify-center space-x-4">
        <button className="bg-blue-500 text-white py-2 w-40 rounded-md hover:bg-blue-600">
          <a href="/discussion">Discussion</a>
        </button>
        <button className="bg-blue-500 text-white py-2 w-40 rounded-md hover:bg-blue-600">
          <a href="/quiz">Quiz</a>
        </button>
      </div>


      <div className="text-left w-full max-w-4xl">
        {/* Loop over chapters */}
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 w-full mb-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {chapter.title}
            </h2>

            {/* Lecture Notes */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                📖 Lecture Notes
              </h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {chapter.lectureNotes.map((note, index) => (
                  <li key={index}>
                    <a
                      href={note.link}
                      className="text-blue-500 hover:underline"
                    >
                      {note.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reference Books */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                📚 Reference Books
              </h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {chapter.referenceBooks.map((book, index) => (
                  <li key={index}>
                    <a
                      href={book.link}
                      className="text-blue-500 hover:underline"
                    >
                      {book.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* YouTube Videos */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                🎥 YouTube Videos
              </h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {chapter.youtubeVideos.map((video, index) => (
                  <li key={index}>
                    <a
                      href={video.link}
                      className="text-blue-500 hover:underline"
                    >
                      {video.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Assignment Submission */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                📝 Assignment Submission
              </h3>
              <a
                href={chapter.assignmentLink}
                className="mt-3 inline-block bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
              >
                Submit Assignment
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Module;
