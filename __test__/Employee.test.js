const Employee= require("../classes/Employee");

const name= "Test Employee Name";
const id= "Test Id";
const email= "Test Email";

const emp= new Employee(name,id,email);
test("Employee is an object",()=>{
    expect(typeof(emp)).toBe("object");
});
test("Employee name is saved",()=>{
    expect(emp.getName()).toBe(name);
});


test("Employee id is saved",()=>{
    expect(emp.getId()).toBe(id);
});

test("Employee email is saved",()=>{
    expect(emp.getEmail()).toBe(email);
});

test("Employee role is saved",()=>{
    expect(emp.getRole()).toBe("Employee");
});