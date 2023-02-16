import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="exhibits">
        <Exhibit name={"IP"} info={"ip address"}/>
        <Exhibit name={"Latency"} info={"latency information"}/>
      </div>
    </div>
  );
}

export default App;
