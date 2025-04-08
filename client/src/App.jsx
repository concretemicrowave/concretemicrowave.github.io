import "./App.css";
import Home from "./pages/Home/Home";
import Tabs from "./components/Tabs/Tabs";

function App() {
  return (
    <>
      <Tabs />
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
