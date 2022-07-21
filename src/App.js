import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import { data } from "./data";

function App() {
  const items = data.map((person) => {
    return <Card key={person.id} person={person} />;
  });

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <Banner />
        <div className="card--list">
          {
            items

            /*or object literal: {...person} if do this then replace props.item. by props. in the card component*/
          }
        </div>
      </header>
    </div>
  );
}

export default App;
