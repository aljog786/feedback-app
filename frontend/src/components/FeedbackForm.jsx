import { useState,useContext,useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelector from "./RatingSelector";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
    const [ text,setText ] = useState('');
    const [ rating,setRating ] = useState(0);
    const [ btnDisabled,setBtnDisabled ] = useState(true);
    const [ message,setMessage ] = useState('');

    const { addFeedback,feedbackEdit,updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit === true) {
          setBtnDisabled(false);
          setText(feedbackEdit.item.text);
          setRating(feedbackEdit.item.rating); 
        } else {
            
        }
    },[feedbackEdit])
    
    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage('text must be atleast 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 0) {
            const newFeedback = {
                text,
                rating
            }
            if (feedbackEdit.edit === true) {
              updateFeedback(feedbackEdit.item._id,newFeedback)  
            } else {
              addFeedback(newFeedback);
            }
            setText('');
        } 
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would u rate your service with us ?</h2>
            <RatingSelector select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input type="text" placeholder="write review" value={text} onChange={handleTextChange}/>
                <Button type="submit" isDisabled={btnDisabled}>send</Button>
            </div>
            { message && <div className="message">{message}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm