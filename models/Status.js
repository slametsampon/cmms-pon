import mongoose from 'mongoose'

const statusSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  name: { type: String, require: true },
  description: { type: String, require: false },
})

const Status = mongoose.models.Status || mongoose.model('Status', statusSchema)
export default Status
