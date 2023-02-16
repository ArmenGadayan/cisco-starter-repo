import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";

function App() {
  return (
    <div className="App">
      <Banner title={"Sextant"} />
      <div className="exhibits">
        <Exhibit name={"IPv4"} type={"IP"} />
        <Exhibit name={"IPv6"} type={"IP"} />
        <Exhibit name={"Latency"} type={"latency"} />
      </div>
    </div>
  );
}

export default App;
