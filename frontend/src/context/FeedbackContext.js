import { useEffect,createContext,useState } from "react";
import axios from "axios";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([]);

    const [ feedbackEdit,setFeedbackEdit ] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
      const fetchFeedback = async () => {
        try {
          const response = await axios.get('http://localhost:5000/feedback');
          setFeedback(response.data);
        } catch (error) {
          console.error('Error fetching feedback', error);
        }
      };
  
      fetchFeedback();
    }, []);

    const addFeedback = async (newFeedback) => {
        try {
          const response = await axios.post('http://localhost:5000/feedback', newFeedback);
          setFeedback([response.data, ...feedback]); // Update the state with the saved feedback from MongoDB
        } catch (error) {
          console.error('Error adding feedback', error);
        }
      };

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure?')) {
          try {
            await axios.delete(`http://localhost:5000/feedback/${id}`);
            setFeedback(feedback.filter((item) => item._id !== id)); // Use MongoDB _id here
          } catch (error) {
            console.error('Error deleting feedback', error);
          }
        }
      };

      const updateFeedback = async (id, updatedItem) => {
        try {
          const response = await axios.put(`http://localhost:5000/feedback/${id}`, updatedItem);
          setFeedback(feedback.map((item) => (item._id === id ? { ...item, ...response.data } : item)));
        } catch (error) {
          console.error('Error updating feedback', error);
        }
      }; 

    const editFeedback = async (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}


export default FeedbackContext
