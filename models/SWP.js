import mongoose from 'mongoose'

const swpSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  name: { type: String, require: true },
  description: { type: String, require: false },
})

const SWP = mongoose.models.SWP || mongoose.model('SWP', swpSchema)
export default SWP
