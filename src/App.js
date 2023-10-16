import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <div className="container">
        <footer>
          <a
            href="https://github.com/tbtreppe/weather-react-app"
            target="_blank"
          >
            Open Source Code
          </a>
          , by Tracey Reis
        </footer>
      </div>
    </div>
  );
}

export default App;
