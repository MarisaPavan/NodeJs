const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  const method = req.method;

  if (url === "/") {
    res.write(`<html>

<head><title>Home Page</title></head>

<body>

<h1>Welcome to my first node page</h1>
<form action = '/create-user' method='POST'>
<input type = 'text' name ='userName'></input>
<input type = 'submit' value ='Add'></input>

</form>

</body>

<htmkl>`);

    return res.end();
  }

  if (url === "/users") {
    res.write(`<html>

    <head><title>Users Page</title></head>
    <body>
   <ul>
   <li>User1</li>
   <li>User2</li>
   <li>User3</li>
   </ul>
    
    </body>
    
    <htmkl>`);

    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const dataArry = [];
    req.on("data", (dataPiece) => {
      console.log("chunk", dataPiece);
      dataArry.push(dataPiece);
    });

    req.on("end", () => {
      const finalData = Buffer.concat(dataArry).toString().split("=");
      console.log("User :", finalData[1]);
      res.setHeader("location", "/");
    });
    return res.end();
  }
});

server.listen(4000);
