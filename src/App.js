import "./App.css";
import Home from "./pages/Home";
import DisplayContext, {
  DisplayContextProvider,
} from "./contexts/DisplayContext";

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
