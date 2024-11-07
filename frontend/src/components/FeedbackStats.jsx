import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {

  const { feedback } = useContext(FeedbackContext)

    // calc avg of rating
    let average = feedback.reduce((a,c) => {
        return a + c.rating
    },0)/feedback.length
    average = average.toFixed(1).replace(/[.,]0$/,'');

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Avg Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats