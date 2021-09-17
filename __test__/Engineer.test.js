const Engineer= require("../classes/Engineer");

const name= "Test Employee Name";
const id= "Test Id";
const email= "Test Email";
const gitHub= "Test Github";

const emp= new Engineer(name,id,email,gitHub);
test("Engineer is an object",()=>{
    expect(typeof(emp)).toBe("object");
});
test("Engineer name is saved",()=>{
    expect(emp.getName()).toBe(name);
});


test("Engineer id is saved",()=>{
    expect(emp.getId()).toBe(id);
});

test("Engineer email is saved",()=>{
    expect(emp.getEmail()).toBe(email);
});
test("Engineer Github is saved",()=>{
    expect(emp.getGitHub()).toBe(gitHub);
});

test("Engineer role is saved",()=>{
    expect(emp.getRole()).toBe("Engineer");
});