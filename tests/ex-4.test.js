import fs from "fs/promises";

describe("Array", () => {
  test("Exercise: employees จะต้องมี Object ใหม่เพิ่มขึ้นมา ", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data} \n return { employees }`;

    const func = new Function(code);
    const { employees } = func();

    expect(employees).toEqual([
      { name: "James", age: 40, hobbies: ["Football", "Social media"] },
      {
        name: "Alex",
        age: 25,
        hobbies: ["Cryptocurrency", "Social media"],
      },
      { name: "Alicia", age: 29, hobbies: ["Shopping", "Reading novels"] },
      { name: "Kody", age: 19, hobbies: ["Computer games", "Wakeboard"] },
    ]);

    expect(employees.length).toEqual(4);
  });
});
