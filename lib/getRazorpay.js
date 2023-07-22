// import { app } from "./app.js";
import Razorpay from "razorpay";
// import { connectDB } from "./config/database.js";




const getRazorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});







export default getRazorpay;
