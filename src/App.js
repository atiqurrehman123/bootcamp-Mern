import Counter from "./Counter"
import './App.css';
import Card from "./components/card/Card";
import ParentComponent from "./components/PropsConcept/ParentComponent";
function App() {
  return (
    <div className="App ">
      <h1>Counter</h1>
      {/* <Counter/> */}
      {/* <Card/> */}
      <ParentComponent/>

      
    </div>
  );
}

export default App;
