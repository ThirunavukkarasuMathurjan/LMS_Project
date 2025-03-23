import React from "react";

const thirdYearSecondSemesterCourses = [
  {
    id: 1,
    title: "Computer Networks",
    instructor: "Sunil Rajapaksha",
    students: "85 Students",
    image: "src/assets/course1.jpg",
  },
  {
    id: 2,
    title: "Business Law",
    instructor: "Arunkumar Sivarasa",
    students: "80 Students",
    image: "src/assets/Business Low.jpg",
  },
  {
    id: 3,
    title: "Data Structures And Algorithm",
    instructor: "Chathurika Sanduni",
    students: "75 Students",
    image: "src/assets/Data Structures.jpg",
  },
  {
    id: 4,
    title: "Software Engineering",
    instructor: "Mugilan Varatharaja",
    students: "78 Students",
    image: "src/assets/Software Engineering.jpg",
  },
  {
    id: 5,
    title: "Database Management System",
    instructor: "Sanjeewa Jayakody",
    students: "82 Students",
    image: "src/assets/Database Management.jpg",
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    instructor: "Pavithra Chandrasekar",
    students: "88 Students",
    image: "src/assets/Artificial Intelligence.jpg",
  },
  {
    id: 7,
    title: "Cyber Security",
    instructor: "Niyomi Gunasekara",
    students: "74 Students",
    image: "src/assets/Cyber Security.jpg",
  },
  {
    id: 8,
    title: "Machine Learning",
    instructor: "Santhini Mahendran",
    students: "79 Students",
    image: "src/assets/Machine Learning.jpg",
  },
];

const fourthYearFirstSemesterCourses = [
  {
    id: 9,
    title: "Digital Marketing",
    instructor: "Mohana Ravindran",
    students: "65 Students",
    image: "src/assets/Digital Marketing.jpg",
  },
  {
    id: 10,
    title: "Cloud Computing",
    instructor: "Olivia Harris",
    students: "72 Students",
    image: "src/assets/Cloud Computing.jpg",
  },
  {
    id: 11,
    title: "Blockchain Technology",
    instructor: "Madushan Perera",
    students: "68 Students",
    image: "src/assets/Blockchain Technology.jpg",
  },
  {
    id: 12,
    title: "Business Analytics",
    instructor: "Shivaji Balasubramaniam",
    students: "90 Students",
    image: "src/assets/Business Analytics.jpg",
  },
  {
    id: 13,
    title: "Human-Computer Interaction",
    instructor: "Manoj Kumara Jayawardena",
    students: "80 Students",
    image: "src/assets/Human-Computer Interaction.jpg",
  },
  {
    id: 14,
    title: "Big Data Analytics",
    instructor: "Vigneshwaran Parameswaran",
    students: "85 Students",
    image: "src/assets/Big Data Analytics.jpg",
  },
  {
    id: 15,
    title: "Embedded Systems",
    instructor: "Rohana Samarasekara",
    students: "70 Students",
    image: "src/assets/Embedded Systems.jpg",
  },
  {
    id: 16,
    title: "Entrepreneurship",
    instructor: "Mathivanan Ramanathan",
    students: "60 Students",
    image: "src/assets/Entrepreneurship.jpg",
  },
  {
    id: 16,
    title: "Research Project",
    instructor: "Thurairaja Baskaran",
    students: "110 Students",
    image: "src/assets/Research Project.jpg",
  },
];

function Courses() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Courses</h1>

      {/* 3rd Year 2nd Semester */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          🎓 3rd Year 2nd Semester
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {thirdYearSecondSemesterCourses.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
              <p className="text-gray-500 text-sm">
                Instructor: {course.instructor}
              </p>
              <p className="text-gray-600 text-sm">{course.students}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4th Year 1st Semester */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          🎓 4th Year 1st Semester
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fourthYearFirstSemesterCourses.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
              <p className="text-gray-500 text-sm">
                Instructor: {course.instructor}
              </p>
              <p className="text-gray-600 text-sm">{course.students}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Courses;
