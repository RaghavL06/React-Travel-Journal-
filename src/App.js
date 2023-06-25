import './App.css';
import Travel from "./components/Travel"
import Heading from "./components/Heading"
import placesData from "./placesData"

function App() {
  
  const placesElements = placesData.map((place) => {
    return <Travel 
      id={place.id}
      place={place}
    />
  })


  return (
    <div className="App">
      <Heading />
      {/* {console.log(placesData)} */}
      {placesElements}
    </div>
  );
}

export default App;
