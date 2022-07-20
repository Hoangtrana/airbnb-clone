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
        {data.map((person) => {
          return (
            <Card
              coverImg={person.coverImg}
              rating={person.stats.rating}
              reviewCount={person.stats.reviewCount}
              location={person.location}
              price={person.price}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
