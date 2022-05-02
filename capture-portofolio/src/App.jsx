import { Routes, Route } from 'react-router-dom';
import AboutUsPage from "./pages/AboutUsPage";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' exact element={<AboutUsPage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/work' element={<OurWork />} />
      </Routes>
    </div>
  );
}

export default App;