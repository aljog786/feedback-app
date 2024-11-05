import { useState } from "react";
import Card from "./shared/Card";

const FeedbackForm = () => {
    const [ text,setText ] = useState('');
    
    const handleTextChange = (e) => {
        setText(e.target.value)
    }

  return (
    <Card>
        <form>
            <h2>How would u rate your service with us ?</h2>
            <div className="input-group">
                <input type="text" placeholder="write review" value={text} onChange={handleTextChange}/>
                <button type="submit">send</button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm