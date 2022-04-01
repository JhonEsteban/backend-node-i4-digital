import mongoose, { Schema, model } from 'mongoose';

export interface IRequestData extends mongoose.Document {
  methodUsed: string;
  dataReturned: [];
  createdAt: Date;
  updateddAt: Date;
}

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
    versionKey: false,
  }
);

export default model<IRequestData>('request', requestDataSchema);
