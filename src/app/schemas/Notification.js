import mongoose from 'mongoose';
import { boolean } from 'yup';

const NotificationSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Number,
      required: true,
    },
    read: {
      required: true,
      default: false,
      type: boolean,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.Model('Notification', NotificationSchema);
