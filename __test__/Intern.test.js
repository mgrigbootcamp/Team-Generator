const Intern= require("../classes/Intern");

const name= "Test Employee Name";
const id= "Test Id";
const email= "Test Email";
const school= "Test school";

const emp= new Intern(name,id,email,school);
test("Intern is an object",()=>{
    expect(typeof(emp)).toBe("object");
});
test("Intern name is saved",()=>{
    expect(emp.getName()).toBe(name);
});


test("Intern id is saved",()=>{
    expect(emp.getId()).toBe(id);
});

test("Intern email is saved",()=>{
    expect(emp.getEmail()).toBe(email);
});
test("Intern office number is saved",()=>{
    expect(emp.getSchool()).toBe(school);
});

test("Intern role is saved",()=>{
    expect(emp.getRole()).toBe("Intern");
});