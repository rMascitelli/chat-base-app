const backendURL = 'http:\/\/localhost:80'

function clearReceived() {
    let rcvd = document.getElementById("payload")
    rcvd.innerHTML = "";
}
  
function InteractiveButtons() {
return (
    <div>
        <button onClick={MakePOSTRequest}>Push ME</button>
        <button onClick={clearReceived}>Clear</button>
    </div>
    );
}

function LoginBox() {
    return (
      <div className="login-box">
            <head>
              <title>Login Credentials</title>
            </head>
            <form>
              <ul>
                <li> Email: <input type="text" name="name" /> </li>
                <li> Password: <input type="text" name="subject" />  </li> 
              </ul>
            </form>
            <button id="LoginButton">Login</button>
      </div>
    );
}

function MakePOSTRequest() {
    // Simple POST request with a JSON body using fetch
    let rcvd = document.getElementById("payload")
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' }),
    };
    fetch(backendURL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        rcvd.innerHTML = JSON.stringify(data, undefined, 4);
      });
  }

export {LoginBox, InteractiveButtons};