import ClassComponent from './components/ClassComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClassComponent lastName = {"Doe"}firstName = {"Jane"} age = {"45"} hairColor = {"Black"}/>
      <ClassComponent lastName = {"Smith"}firstName = {"John"} age = {"88"} hairColor = {"Brown"}/>
      <ClassComponent lastName = {"Fillmore"}firstName = {"Millard"} age = {"50"} hairColor = {"Brown"}/>
      <ClassComponent lastName = {"Smith"}firstName = {"Maria"} age = {"62"} hairColor = {"Brown"}/>
    </div>
  );
}

export default App;
