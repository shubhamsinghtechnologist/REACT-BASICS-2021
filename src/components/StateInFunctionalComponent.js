import React, { useState } from "react";

const StateInFunctionalComponent = () => {
  let [cityState, setCityState] = useState("Dehradun");

  const viewCityStateName = () => {
    setCityState("Dehradun, Uttarakhand");
  };
  return (
    <div>
      <h2>My city name is {cityState}</h2>
      <button onClick={viewCityStateName}>View City and State Name</button>
    </div>
  );
};

export default StateInFunctionalComponent;
