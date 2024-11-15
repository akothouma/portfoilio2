// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home'
import Experience from './Experience'
import About from "./About";
import Contact from "./Contact";
function App() {
  return (
      <div
      style={{
        color:'rgb(255,92,0)',
        height:100
      }} 
      >
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/resume" element={<Contact />} />
              </Routes>
          </Router>
      </div>
  );
}
export default App;
