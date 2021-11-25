import "./App.css";
import Header from "./components/layout/Header";
import Setup from "./components/mainMenu/Setup";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Setup />
      </main>
    </div>
  );
}

export default App;
