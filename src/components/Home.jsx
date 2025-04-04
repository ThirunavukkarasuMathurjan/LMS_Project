import React from "react";

const courses = [
  {
    id: 1,
    title: "Computer Networks",
    instructor: "Sunil Rajapaksha",
    students: "85 Students",
    image: "src/assets/course1.jpg",
    zoomLink: "https://zoom.us/react-fundamentals",
    instructions: "Complete the pre-reading on JSX before the lecture.",
    coursePage: "/module",
  },
  {
    id: 2,
    title: "Human-Computer Interaction ",
    instructor: "Manoj Kumara Jayawardena",
    students: "80 Students",
    image: "src/assets/Human-Computer Interaction.jpg",
    zoomLink: "https://zoom.us/advanced-js",
    instructions: "Prepare questions on closures and promises for discussion.",
    coursePage: "/courses/advanced-javascript",
  },
  {
    id: 3,
    title: "Business Analytics",
    instructor: "Shivaji Balasubramaniam",
    students: "90 Students",
    image: "src/assets/Business Analytics.jpg",
    zoomLink: "https://zoom.us/uiux-principles",
    instructions: "Review the latest UI design trends before the session.",
    coursePage: "/courses/uiux-design-principles",
  },
  {
    id: 4,
    title: "Digital Marketing",
    instructor: "Mohana Ravindran",
    students: "65 Students",
    image: "src/assets/Digital Marketing.jpg",
    zoomLink: "https://zoom.us/ml-basics",
    instructions: "Install Python and Jupyter Notebook before attending.",
    coursePage: "/courses/machine-learning-basics",
  },
];

const assignments = [
  {
    id: 1,
    name: "Human-Computer Interaction",
    dueDate: "March 30, 2025",
    subject: "React Fundamentals",
    remainingDays: 4,
  },
  {
    id: 2,
    name: "Research Project",
    dueDate: "March 26, 2025",
    subject: "Progress Presentation",
    remainingDays: 2,
  },
  {
    id: 3,
    name: "Cloud Computing",
    dueDate: "March 29, 2025",
    subject: "UI/UX Design Principles",
    remainingDays: 9,
  },
  {
    id: 4,
    name: "Business Analytics",
    dueDate: "April 5, 2025",
    subject: "Quiz",
    remainingDays: 17,
  },
];

function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      {/* Navbar */}
      <nav className="w-full bg-blue-400 shadow-md py-4 px-6 flex items-center justify-between fixed top-0 left-0 z-50">
        <div className="flex items-center">
          <img
            src="src/assets/UWU.jpg"
            alt="University Logo"
            className="w-12 h-12"
          />
          <span className="ml-4 text-lg font-semibold text-black">
            Uva Wellassa University
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/calender" className="text-black hover:text-blue-500">
            Calendar
          </a>
          <a href="/courses" className="text-black hover:text-blue-500">
            Courses
          </a>
          <a href="/profile" className="text-black hover:text-blue-500">
            Profile
          </a>
          <a href="/join" className="text-black hover:text-blue-500">
            Join Lecture
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="p-10 mt-20 w-full">
        <h1 className="text-3xl font-bold text-gray-800">
          Hello Sophia Williams,
        </h1>
        <p className="text-gray-600 mt-2">
          Welcome Back to your virtual learning environment.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
          {/* Recently Accessed Courses */}
          <div className="bg-white shadow-md rounded-lg p-6 col-span-2 w-full">
            <h2 className="text-xl font-semibold">Recently Accessed Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-gray-100 shadow-md rounded-lg overflow-hidden relative"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    <p className="text-gray-500 text-sm">
                      Instructor: {course.instructor}
                    </p>
                    <p className="text-gray-600 text-sm">{course.students}</p>
                  </div>
                  {/* Floating Button */}
                  <a
                    href={course.coursePage}
                    className="absolute bottom-4 right-4"
                  >
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 transition">
                      View
                    </button>
                  </a>
                </div>
              ))}
            </div>

            {/* More Button */}
            <div className="flex justify-end mt-6">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition">
                <a href="/courses">More</a>
              </button>
            </div>
          </div>

          {/* Upcoming Assignments */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full">
            <h2 className="text-xl font-semibold">Upcoming Assignments</h2>
            {assignments.length > 0 ? (
              <ul className="mt-4 space-y-4">
                {assignments.map((assignment) => (
                  <li
                    key={assignment.id}
                    className="bg-gray-100 p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-lg font-semibold">{assignment.name}</h3>
                    <p className="text-gray-600 text-sm">
                      📅 Due: {assignment.dueDate}
                    </p>
                    <p className="text-gray-500 text-sm">
                      📖 Subject: {assignment.subject}
                    </p>
                    <p className="text-red-500 text-sm font-semibold">
                      ⏳ {assignment.remainingDays} days left
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No upcoming assignments.</p>
            )}
          </div>

          {/* Announcements */}
          <div className="bg-white shadow-md rounded-lg p-6 col-span-3 w-full">
            <h2 className="text-xl font-semibold">Announcements</h2>
            {courses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-gray-100 p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    <p className="text-gray-600 text-sm">
                      🎤 Instructor: {course.instructor}
                    </p>
                    <p className="text-blue-500 text-sm">
                      🔗{" "}
                      <a
                        href={course.zoomLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        Join Zoom Session
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm">
                      📝 {course.instructions}
                    </p>
                    <div className="flex justify-end mt-3">
                      {/* <a href={course.coursePage}> */}
                        <button className="bg-blue-500 text-white py-2 w-32 rounded-md hover:bg-blue-600">
                          <a href="/module">Course</a>
                        </button>
                      {/* </a> */}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No announcements available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        &copy; 2025 Uva Wellassa University. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Home;