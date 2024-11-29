import Form from './components/Form';
import './App.css';
function App() {
  
  return (
    <div className="App">
      <Form params={ {name: "Alex", age:12}}></Form>
    </div>
  );
}

export default App;
