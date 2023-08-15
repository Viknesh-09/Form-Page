

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


fetch('http://127.0.0.1:9187/openapi.json',{
  method: "GET",
  
})
  .then((res) => res.json())
  .then((data) => {
    document.getElementsByName("response").innerText = JSON.stringify(data.data);
  });

