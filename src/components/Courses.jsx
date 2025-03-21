import React from "react";

const thirdYearSecondSemesterCourses = [
  {
    id: 1,
    title: "Computer Networks",
    instructor: "John Doe",
    students: "85 Students",
    image: "src/assets/course1.jpg",
  },
  {
    id: 2,
    title: "English Language",
    instructor: "Jane Smith",
    students: "80 Students",
    image: "src/assets/course2.jpg",
  },
  {
    id: 3,
    title: "Data Structures",
    instructor: "Alice Brown",
    students: "75 Students",
    image: "src/assets/course3.jpg",
  },
  {
    id: 4,
    title: "Software Engineering",
    instructor: "Robert Wilson",
    students: "78 Students",
    image: "src/assets/course4.jpg",
  },
  {
    id: 5,
    title: "Database Management",
    instructor: "Chris Martin",
    students: "82 Students",
    image: "src/assets/course5.jpg",
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    instructor: "David Johnson",
    students: "88 Students",
    image: "src/assets/course6.jpg",
  },
  {
    id: 7,
    title: "Cyber Security",
    instructor: "Emma Williams",
    students: "74 Students",
    image: "src/assets/course7.jpg",
  },
  {
    id: 8,
    title: "Machine Learning",
    instructor: "Sophia Lee",
    students: "79 Students",
    image: "src/assets/course8.jpg",
  },
];

const fourthYearFirstSemesterCourses = [
  {
    id: 9,
    title: "Digital Marketing",
    instructor: "Michael Lee",
    students: "65 Students",
    image: "src/assets/course9.jpg",
  },
  {
    id: 10,
    title: "Cloud Computing",
    instructor: "Olivia Harris",
    students: "72 Students",
    image: "src/assets/course10.jpg",
  },
  {
    id: 11,
    title: "Blockchain Technology",
    instructor: "Daniel White",
    students: "68 Students",
    image: "src/assets/course11.jpg",
  },
  {
    id: 12,
    title: "Business Analytics",
    instructor: "Jessica Moore",
    students: "71 Students",
    image: "src/assets/course12.jpg",
  },
  {
    id: 13,
    title: "Human-Computer Interaction",
    instructor: "Ethan Anderson",
    students: "66 Students",
    image: "src/assets/course13.jpg",
  },
  {
    id: 14,
    title: "Big Data Analytics",
    instructor: "Liam Scott",
    students: "85 Students",
    image: "src/assets/course14.jpg",
  },
  {
    id: 15,
    title: "Embedded Systems",
    instructor: "Charlotte Taylor",
    students: "70 Students",
    image: "src/assets/course15.jpg",
  },
  {
    id: 16,
    title: "Entrepreneurship",
    instructor: "Benjamin Adams",
    students: "60 Students",
    image: "src/assets/course16.jpg",
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
