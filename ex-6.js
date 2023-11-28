const student = {
  name: "John Doe",
  grade: 12,
  subjects: ["Math", "Science", "History"],
};

console.log("Student Name: " + student.name);
console.log("Student Age: 18");
console.log("Student Grade: " + student.grade);

if (Array.isArray(student.subjects)) {
  console.log("Student Subjects: " + student.subjects.join(","));
} else {
  console.log("Student Subjects is not an array or is undefined.");
}
