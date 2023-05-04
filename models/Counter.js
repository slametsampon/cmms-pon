import mongoose from 'mongoose'

const counterSchema = new mongoose.Schema({
  prevMonth: { type: Number, require: true, default: 0 },
  sectionId: { type: Number, require: true, default: 0 },
  workOrder: { type: Number, require: true, default: 0 },
  swp: { type: Number, require: true, default: 0 },
  jobTicket: { type: Number, require: true, default: 0 },
})

const Counter = mongoose.models.Counter || mongoose.model('Counter', counterSchema)
export default Counter
