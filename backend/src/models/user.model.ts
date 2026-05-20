import mongoose, { Model, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  createdAt:Date,
  updatedAt:Date
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
