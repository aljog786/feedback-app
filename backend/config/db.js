import mongoose from 'mongoose';

const MongoURI = "mongodb+srv://aljog786:Qp4Pu2Vor7dtaxYU@cluster0.4owbe.mongodb.net/feedback-app?retryWrites=true&w=majority";


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(MongoURI,{
        serverSelectionTimeoutMS: 20000 // 20 seconds
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); // Exit with failure
    }
  };
  
  export default connectDB;


