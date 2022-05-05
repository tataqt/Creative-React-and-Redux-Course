import { Routes, Route, useLocation } from 'react-router-dom';
import AboutUsPage from "./pages/AboutUsPage";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from './pages/MovieDetail';
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle"
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<AboutUsPage />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/work' exact element={<OurWork />} />
          <Route path='/work/:id' element={<MovieDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;