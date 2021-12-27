const getData = (dbUrl, token, queryType, stateSetter) => {
  const query = queryType;
  fetch(dbUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json",
      "x-auth-token": token
    },
    body: (JSON.stringify({
      query
    }))
  }).then(response => response.json())
    .then(jsoned => stateSetter(jsoned)).catch(e => console.log(e));
};
export default getData;