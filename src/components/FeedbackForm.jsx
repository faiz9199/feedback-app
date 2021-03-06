import Card from "../shared/Card";
import { useState, useContext } from "react";
import { useEffect } from "react";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { addFeedback, updateFeedback, updateFeed } =
    useContext(FeedbackContext);
  useEffect(() => {
    if (updateFeedback.edit === true) {
      setbtnDisabled(false);
      setText(updateFeedback.item.text);
      setRating(updateFeedback.item.rating);
    }
  }, [updateFeedback]);

  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");
  const handleOnChange = (e) => {
    if (text === "") {
      setMessage(null);
      setbtnDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setbtnDisabled(true);
    } else {
      setbtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (updateFeedback.edit === true) {
        updateFeed(updateFeedback.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };

  return (
    <Card reverse={false}>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleOnChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
