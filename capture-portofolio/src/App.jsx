import AboutUsPage from "./pages/AboutUsPage";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUsPage />
    </div>
  );
}

export default App;