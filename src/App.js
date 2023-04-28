import Counter from "./Counter"
import './App.css';
import Card from "./components/card/Card";
import ParentComponent from "./components/PropsConcept/ParentComponent";
import ThinkingInReact from "./components/ThinkingInReact/ThinkingInReact";
function App() {
  return (
    <div className="App ">
      <h1>ThinkingInReact</h1>
      {/* <Counter/> */}
      {/* <Card/> */}
      {/* <ParentComponent/> */}
      <h1>Fruites</h1>
      <ThinkingInReact fruiteveg={"Fruits"}/>
      <h1>Vegetables</h1>
      <ThinkingInReact fruiteveg={"Vegetables"}/>
      <h1>FruiteVeg</h1>
      <ThinkingInReact fruiteveg={"FruiteVeg"} />


      
    </div>
  );
}

export default App;
