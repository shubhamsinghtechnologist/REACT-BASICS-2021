//---------------------------------------------------------------------------------------------
//Class Component in REACT
class App extends React.Component {
  render() {
    return (
      <>
        <Shubham />
      </>
    );
  }
}
// ---------------------------------------------------------------------------------------------
//Functional Component in REACT
function Shubham() {
  return <div>Hello World</div>;
}

ReactDOM.render(<App />, document.getElementById("app"));

// ------------------------------------- The End --------------------------------------------------
