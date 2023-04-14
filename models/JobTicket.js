import mongoose from 'mongoose'

const jobticketSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  tagnumber: { type: String, require: true },
  title: { type: String, require: false },
  priority: { type: String, require: true },
  location: { type: String, require: true },
  status: { type: String, require: true },
  ref: { type: String, require: true },
  executor: { type: [String], require: true },
  detailTask: { type: [String], require: true },
  detailSHE: { type: [String], require: true },
  scheduleDate: { type: String, require: true },
  finishDate: { type: String, require: true },
})

const Jobticket = mongoose.models.Jobticket || mongoose.model('Jobticket', jobticketSchema)
export default Jobticket
