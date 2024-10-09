import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Number, default: 2 },
});

const User = new mongoose.model('user', userSchema);

// User.sync({ force: true });
export default User;
