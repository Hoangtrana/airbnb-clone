import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <Banner />
        <div className="card--list">
          {data.map((person) => {
            return <Card key={person.id} person={person} />;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
