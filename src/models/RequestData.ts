import { Schema, model } from 'mongoose';

const requestDataSchema = new Schema(
  {
    methodUsed: {
      type: String,
      required: true,
    },
    dataReturned: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('request', requestDataSchema);
