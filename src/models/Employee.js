import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const employeeSchema = new Schema(
  {
    name: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    roles: [
      {
        ref: 'Role',
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

employeeSchema.statics.encodePassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

employeeSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model('Employee', employeeSchema);
