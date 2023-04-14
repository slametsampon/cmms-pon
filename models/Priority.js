import mongoose from 'mongoose'

const PrioritySchema = new mongoose.Schema({
  id: { type: Number, require: true },
  name: { type: String, require: true },
  description: { type: String, require: false },
})

const Priority = mongoose.models.Priority || mongoose.model('Priority', PrioritySchema)
export default Priority
