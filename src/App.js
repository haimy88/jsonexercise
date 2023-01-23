import "./App.css";
import Home from "./pages/Home";
import { DisplayContextProvider } from "./contexts/DisplayContext";

function App() {
  return (
    <>
      <DisplayContextProvider>
        <Home />
      </DisplayContextProvider>
    </>
  );
}

export default App;
