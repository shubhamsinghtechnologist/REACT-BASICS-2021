import React from "react";

const PropsInFunctionalComponent = (props) => {
  console.log(props);

  // We cannot change the value of props
  function changeAge() {
    alert(props.details.age);
    return (props.details.age = 30);
  }
  return (
    <div>
      Props Children (HTML): {props.children}
      <h3>My Name is {props.name}</h3>
      <h3>My Hobbies are: {props.hobbies + " "}</h3>
      <h3>
        My age is {props.details.age} - My city is {props.details.city} - Am i
        married : {props.details.isMarried}
      </h3>
      <button onClick={changeAge}>Change Age</button>
    </div>
  );
};

export default PropsInFunctionalComponent;
