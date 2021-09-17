const Manager= require("../classes/Manager");

const name= "Test Employee Name";
const id= "Test Id";
const email= "Test Email";
const officeNumber= "Test office number";

const emp= new Manager(name,id,email,officeNumber);
test("Manager is an object",()=>{
    expect(typeof(emp)).toBe("object");
});
test("Manager name is saved",()=>{
    expect(emp.getName()).toBe(name);
});


test("Manager id is saved",()=>{
    expect(emp.getId()).toBe(id);
});

test("Manager email is saved",()=>{
    expect(emp.getEmail()).toBe(email);
});
test("Manager office number is saved",()=>{
    expect(emp.getOfficeNumber()).toBe(officeNumber);
});

test("Manager role is saved",()=>{
    expect(emp.getRole()).toBe("Manager");
});