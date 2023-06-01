import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <div>
        <MascotLogo />
        <LoginBox />
      </div>
      
      </header>
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
