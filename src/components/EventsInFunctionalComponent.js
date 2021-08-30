export default function EventsInFunctionalComponent() {
  let myName = "Shubham Singh";
  function displayName(age) {
    myName = "Satyam Singh";
    alert(`My name is ${myName} and I am ${age} years old.`);
  }
  return (
    <>
      <p>Hello {myName}</p>

      {/* Call automatically */}
      {/* <button onClick={alert(displayName())}>Click Me</button> */}
      {/* ---------------------------------------------------------------------------------------- */}
      {/* Call on button click */}
      {/* <button onClick={displayName}>Click Me</button> */}
      {/* ---------------------------------------------------------------------------------------- */}
      {/* If we need to pass parameter in function  */}
      <button onClick={() => displayName(25)}>Click Me</button>
      {/* ---------------------------------------------------------------------------------------- */}
    </>
  );
}
