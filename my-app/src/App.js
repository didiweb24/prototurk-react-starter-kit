import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <img src="./logo192.png" />
      <img src={logo} />
    </div>
  );
}

export default App;
