const getData = async (dbUrl, token, queryType) => {
  let result;
  const query = queryType;
  await fetch(dbUrl, {
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
    .then(jsoned => result = jsoned).catch(e => { console.log(e); result = e; });
  return result;
};
export default getData;