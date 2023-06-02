import { useState } from 'react';

const backendURL = 'http:\/\/localhost:80'

function LoginBox() {
  const [email_current, setCurrentEmail] = useState('');
  const [password_current, setCurrentPassword] = useState('');
  const handleEmailChange = (event) => {
    setCurrentEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };
  const handleClick = () => {
    MakeLoginRequest(email_current, password_current)
    setCurrentEmail("")
    setCurrentPassword("")
  };
  return (
    <div style={{'margin-top':'30px'}}>
          <head>
            <title>Login Credentials</title>
          </head>
          <form>
            <ul>
              <li> Email:    <input type="text" value={email_current} onChange={handleEmailChange} /> </li>
              <li> Password: <input type="text" value={password_current} onChange={handlePasswordChange} />  </li> 
            </ul>
          </form>
          <button onClick={handleClick} style={{'margin-top':'20px'}}>Login</button>
    </div>
  );
}

function MakeLoginRequest(user_email, user_password) {
    // Simple POST request with a JSON body using fetch
    let rcvd = document.getElementById("payload")
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      // TODO: should add check for email,pass == string here? 
      body: JSON.stringify({ 
        email: user_email,
        password: user_password
      }),
    };
    fetch(backendURL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        rcvd.innerHTML = JSON.stringify(data, undefined, 4);
      });
  }

export {LoginBox};