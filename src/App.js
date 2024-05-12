
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Details from "./pages/Details";

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Shop />}/>
            <Route exact path="/details" element={<Details />}/>
            <Route exact path="/cart" element={<Cart />}/>
          </Routes>

          <Footer/>
      </Router>

    </div>
  );
}

export default App;
