import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  name: { type: String, require: true },
  email: { type: String, require: false, default: 'email@example.com' },
  password: { type: String, require: true },
  isActive: { type: Boolean, require: true, default: false },
  isAdmin: { type: Boolean, require: true, default: false },
  forwardUser: { type: Number, require: true },
  reverseUser: { type: Number, require: true },
  level: { type: Number, require: true },
  sectionId: { type: Number, require: true },
})

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User
