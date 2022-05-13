import Home from "./pages/Home";
import Nav from "./components/Nav";
import GlobalStyles from "./helpers/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
