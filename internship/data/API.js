async function getRequest(){
    const request = await fetch('http://127.0.0.1:8461/openapi.json');
    const json = await response.json();
    document.getElementById("name").innerHTML =  params.get("name");
    document.getElementById("address").innerHTML = params.get("address");
    document.getElementById("phoneNumber").innerHTML = params.get("phoneNumber");
}


fetch('http://127.0.0.1:8461//openapi.json')
.then(response => {
    console.log(response);
    return response.json();
})
.then(response => {
    console.log(response);
    
})
.catch(error => {
    console.log('error!');
    console.error(error);
});




var request = new XMLHttpRequest()

request.open('GET', 'http://127.0.0.1:6368/openapi.json', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((api) => {
      console.log(api.title)
    })
  } else {
    console.log('error')
  }
}

request.send()
