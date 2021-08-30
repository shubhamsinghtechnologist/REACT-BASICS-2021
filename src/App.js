import "./App.css";
import ConstructorLifeCycleMethod from "./components/Life Cycle Methods/Class Components/ConstructorLifeCycleMethod";
import RenderLifeCycleMethod from "./components/Life Cycle Methods/Class Components/RenderLifeCycleMethod";
import ClassComponent from "./components/ClassComponent";
import EventsInClassComponent from "./components/EventsInClassComponent";
import EventsInFunctionalComponent from "./components/EventsInFunctionalComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import PropsInClassComponent from "./components/PropsInClassComponent";
import PropsInFunctionalComponent from "./components/PropsInFunctionalComponent";
import StateInClassComponent from "./components/StateInClassComponent";
import StateInFunctionalComponent from "./components/StateInFunctionalComponent";

function App() {
  const details = {
    isMarried: "No",
    age: 25,
    city: "Dehradun",
  };
  const hobbies = ["Singing", "Dancing", "Listening"];
  return (
    <div className="App">
      <FunctionalComponent />
      <hr />
      <ClassComponent />
      <hr />
      <EventsInFunctionalComponent />
      <hr />
      <EventsInClassComponent />
      <hr />
      <StateInFunctionalComponent />
      <hr />
      <StateInClassComponent />
      <hr />
      <PropsInFunctionalComponent
        name="Shubham Singh"
        details={details}
        hobbies={hobbies}
      >
        <h4>Shubham Singh</h4>
      </PropsInFunctionalComponent>
      <hr />
      <PropsInClassComponent
        name="Shubham Singh"
        details={details}
        hobbies={hobbies}
      >
        <h4>Suruchi Singh</h4>
      </PropsInClassComponent>
      <hr />
      <ConstructorLifeCycleMethod />
      <hr />
      <RenderLifeCycleMethod />
      <hr />
    </div>
  );
}

export default App;
