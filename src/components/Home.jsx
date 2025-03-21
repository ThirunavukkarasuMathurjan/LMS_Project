import React from "react";

const courses = [
  {
    id: 1,
    title: "React Fundamentals",
    instructor: "John Doe",
    students: "200 Students",
    image: "src/assets/course1.jpg",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    instructor: "Jane Smith",
    students: "150 Students",
    image: "src/assets/course2.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    instructor: "Emily Johnson",
    students: "180 Students",
    image: "src/assets/course3.jpg",
  },
  {
    id: 4,
    title: "Machine Learning Basics",
    instructor: "Michael Lee",
    students: "120 Students",
    image: "src/assets/course4.jpg",
  },
];

const assignments = [
  {
    id: 1,
    name: "React Project Submission",
    dueDate: "March 25, 2025",
    subject: "React Fundamentals",
    remainingDays: 4,
  },
  {
    id: 2,
    name: "JavaScript ES6 Quiz",
    dueDate: "March 27, 2025",
    subject: "Advanced JavaScript",
    remainingDays: 6,
  },
  {
    id: 3,
    name: "UI Redesign Case Study",
    dueDate: "March 30, 2025",
    subject: "UI/UX Design Principles",
    remainingDays: 9,
  },
  {
    id: 4,
    name: "UI Redesign Case Study",
    dueDate: "March 30, 2025",
    subject: "UI/UX Design Principles",
    remainingDays: 9,
  },
];

function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      {/* Navbar */}
      <nav className="w-full bg-blue-400 shadow-md py-4 px-6 flex items-center justify-between fixed top-0 left-0 z-50">
        {/* Left: Logo & University Name */}
        <div className="flex items-center">
          <img src="src/assets/UWU.jpg" alt="University Logo" className="w-12 h-12"/>
          <span className="ml-4 text-lg font-semibold text-black">
            Uva Wellassa University
          </span>
        </div>

        {/* Right: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-black hover:text-blue-500">Calendar</a>
          <a href="#" className="text-black hover:text-blue-500">Courses</a>
          <a href="#" className="text-black hover:text-blue-500">Profile</a>
          <a href="#" className="text-black hover:text-blue-500">Quizzes</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="p-10 mt-20 w-full">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
        <p className="text-gray-600 mt-2">Here’s what’s happening in your learning environment:</p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
          {/* Recently Accessed Courses */}
          <div className="bg-white shadow-md rounded-lg p-6 col-span-2 w-full">
            <h2 className="text-xl font-semibold">Recently Accessed Courses</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {courses.map((course) => (
                <div key={course.id} className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-40 object-cover"/>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    <p className="text-gray-500 text-sm">Instructor: {course.instructor}</p>
                    <p className="text-gray-600 text-sm">{course.students}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Assignments */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full">
            <h2 className="text-xl font-semibold">Upcoming Assignments</h2>
            {assignments.length > 0 ? (
              <ul className="mt-4 space-y-4">
                {assignments.map((assignment) => (
                  <li key={assignment.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">{assignment.name}</h3>
                    <p className="text-gray-600 text-sm">📅 Due: {assignment.dueDate}</p>
                    <p className="text-gray-500 text-sm">📖 Subject: {assignment.subject}</p>
                    <p className="text-red-500 text-sm font-semibold">⏳ {assignment.remainingDays} days left</p>
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
            <p className="text-gray-500">No announcements available.</p>
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
