
function getData(url, token, queryType) {
  const query = queryType;
fetch(url, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json",
    "x-auth-token": token
  },
  body: (JSON.stringify({
    query
  }))
}).then(response => response.json()).then(jsoned => console.log(jsoned));
}