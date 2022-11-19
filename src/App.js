import logo from './logo.svg';
import './App.css';

const name = 'Adnan Hassan';
const ocupation = "Programmer";
const details = ['Adnan Hassan', "Programmer", 'Fuska Developer']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello React</h2>
        <div className="container">
          <h2>Mui React Shikhte Aisi</h2>
        </div>
        <div className="developer">
          <h3>Name : {details[0]}, Ocupation: {details[1]}</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
