import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Pages/Blogs";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Forums from "./Pages/Forums";
import Jobs from "./Pages/Jobs";
import Events from "./Pages/Events";
import Error from "./Pages/Error";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    //Router for Navigation through Pages.
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="forums" element={<Forums />} />
        <Route exact path="events" element={<Events />} />
        <Route exact path="blog" element={<Blog />} />
        <Route exact path="jobs" element={<Jobs />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
