function generateHtml (data){
    let html= `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teame Builder Generator</title>
    <style>    body { margin: 0; text-align: center;} header {padding: 5px; background-color: navy;
    color: white; margin-bottom: 25px;} section {display: inline-block; 
    padding: 10px; border-radius: 15px; border: 1px solid black; text-align: center;
    margin: 10px; box-shadow: 0 0 5px black;} .Manager{background-color: silver;} 
    .Engineer {background-color: linen;}
    .Intern{background-color: lavender;}</style>
</head>
<body>
   <header>
    <h1> 
        Welcome To The Team Builder Generator
    </h1>
   </header>
   
   <main> `;
        for (let emp of data){
            const role = emp.getRole();
            html += `
        <section class= "${role}">
            <h3> ${role}</h3>
            <h2> ${emp.getName()}</h2>
            <p> id: ${emp.getId()}</p>
            <p> email: ${emp.getEmail()}</p>`;
            switch (role){
                case "Manager": html+=`<p>Office Number: ${emp.getOfficeNumber()}</p>`; break;
                case "Engineer": html+=`<p>Github: ${emp.getGitHub()}</p>`; break;
                case "Intern": html+=`<p>School: ${emp.getSchool()}</p>`; break;
            }
        html+=`</section>
            `;
        }
   html+=`</main>
   
   
</body>
</html>
    `;

    return html;
}
module.exports= generateHtml;