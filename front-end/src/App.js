import './App.css';

const backendURL = 'http:\/\/localhost:80'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <div>
        <MascotLogo />
        <LoginBox />
      </div>
      <InteractiveButtons />
      <div>
          <pre id="payload"><span class="text-muted">Nothing sent yet...</span></pre>
      </div>
      </header>
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

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="chatbase-logo" src="/chatbase-logo.png" />
      <div className="links">
        <a className="nav-link" href="/">Home</a>
        <a className="create-account-button" href="/create">Create Account</a>
      </div>
    </nav>
  );
}

function MascotLogo() {
  return(
    <div>
    <img className="mascot-logo" src={"https://i.imgur.com/qWcHuT8.jpeg"} alt={'Logo'} />
    <p style={{"font-size":"5px"}}> Our mascot: Phil </p>
    </div>
  );
}

function LoginBox() {
  return (
    <div className="login-credentials">
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


export default App;
