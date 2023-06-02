import './App.css';
import {LoginBox} from './LoginBox';
import {Navbar} from './ExtraElements'
import {PayloadAnalyzer} from './PayloadAnalyzer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <LoginBox />
      <PayloadAnalyzer />
      </header>
    </div>
  );
}

export default App;
