import FeedbackList from "./components/FeedbackList";
import Headers from "./components/Headers";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutIcon from "./components/AboutIcon";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const onAdd = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <Router>
      <Headers />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={onAdd} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={onDelete} />
              </>
            }
          ></Route>

          <Route path="/about" element={<About />} />
        </Routes>
        <AboutIcon/>
      </div>
    </Router>
  );
}

export default App;
