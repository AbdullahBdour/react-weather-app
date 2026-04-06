import "./App.css";
import WeatherContainer from "./components/WeatherContainer";
import Theme from "./providers/Theme";

function App() {
  return (
    <>
      <Theme>
        <WeatherContainer />
      </Theme>
    </>
  );
}

export default App;
