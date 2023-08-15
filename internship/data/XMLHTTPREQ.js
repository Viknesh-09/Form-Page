app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
  const cors = require("cors");
  const { eventNames } = require("process");
  
  app.use(cors());
  
  app.use(cors({
    origin: 'http://127.0.0.1:9187/openapi.json'
  }));

  
let xhr = new XMLHttpRequest()

xhr.open("GET","http://127.0.0.1:9187/openapi.json", true);
xhr.onload = function() {
    const obj = JSON.parse(xhr.responseText)
    document.getElementById("response").innerText = obj.data.first_name
};
xhr.send();
