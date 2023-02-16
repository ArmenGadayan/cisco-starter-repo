import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import PublicIP from "./components/PublicIP";
import Latency from "./components/Latency";

function App() {
  return (
    <div className="App">
      <Banner title={"Sextant"} />
      <div className="exhibits">
        <Exhibit name={"IPv4 Address"}> 
          <PublicIP IP_type={"IPv4"}/>
        </Exhibit>
        <Exhibit name={"IPv6 Address"}> 
          <PublicIP IP_type={"IPv6"}/>
        </Exhibit>
        <Exhibit name={"Latency"}> 
          <Latency />
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
