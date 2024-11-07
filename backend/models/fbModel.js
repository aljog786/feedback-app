import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  text: { type: String, required: true }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;