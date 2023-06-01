import './App.css';
import {LoginBox, InteractiveButtons} from './LoginBox';
import {Navbar, MascotLogo} from './ExtraElements'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <div>
        <LoginBox />
      </div>
      <InteractiveButtons />
      <div id="payload" className="http-request-test-box">
          <pre><span class="text-muted">Nothing sent yet...</span></pre>
      </div>
      </header>
    </div>
  );
}

export default App;
