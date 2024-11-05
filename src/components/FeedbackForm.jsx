import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

const FeedbackForm = () => {
    const [ text,setText ] = useState('');
    const [ btnDisabled,setBtnDisabled ] = useState(true);
    const [ message,setMessage ] = useState('');

    
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

  return (
    <Card>
        <form>
            <h2>How would u rate your service with us ?</h2>
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