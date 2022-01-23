import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">dictionary.</header>
        <main>
          <Search defaultKeyword="sunrise" />
        </main>
        <footer className="footer text-center">
          Coded by{" "}
          <a
            href="https://infallible-bhaskara-573893.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Morgan Mason
          </a>{" "}
          and open-sourced on{" "}
          <a
            href="https://github.com/masonmol/Dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
