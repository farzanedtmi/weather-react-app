import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="APP">
      {" "}
      <div className="container">
        {" "}
        <h1>Weather APP</h1>
        <Weather />
        <footer>
          This project is coded by Farzan an is{" "}
             <a
             href="https://github.com/farzanedtmi/weather-react-app/commit/2482a73cec9781c50b2b0fc6b54ca26c33f9d22b"
             target="_blank"
             rel="noreferrer"
           >
             {" "}
             open-sourced on Github{" "}
           </a>
        </footer>
      </div>{" "}
    </div>
  );
}


