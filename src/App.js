import FeedbackList from "./components/FeedbackList";
import Headers from "./components/Headers";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Headers />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
