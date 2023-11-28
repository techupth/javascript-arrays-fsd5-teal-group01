const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
  {
    name: "Alicia",
    age: 29,
    hobbies: ["Shopping", "Reading novels"],
  },
  {
    name: "Kody",
    age: 19,
    hobbies: ["Computer games", "Wakeboard"],
  },
];

// ลบ Object ของพนักงานที่ชื่อ "Kody"
const updateEmployees = employees.filter(
  (employee) => employee.name !== "Kody"
);

// แสดงผลลัพธ์ใน Console
console.log(updateEmployees); // ดูค่าของ employees หลังการลบ Object ที่ชื่อ "Kody"

// Start coding here
