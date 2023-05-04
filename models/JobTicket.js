import mongoose from 'mongoose'

const jobticketSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  jtNumber: { type: String, require: true },
  tagnumber: { type: String, require: true },
  title: { type: String, require: false },
  respSectionId: { type: Number, require: true },
  originatorId: { type: Number, require: true },
  currentUserId: { type: Number, require: true },
  priorityId: { type: Number, require: true },
  location: { type: String, require: true },
  statusId: { type: Number, require: true },
  ref: { type: String, require: true },
  executor: { type: [String], require: true },
  detailTask: { type: [String], require: true },
  detailSHE: { type: [String], require: true },
  scheduleDate: { type: String, require: true },
  executeDate: { type: String, require: true },
  swpNumber: { type: [String], require: true },
  detailAction: { type: [String], require: true },
})

const Jobticket = mongoose.models.Jobticket || mongoose.model('Jobticket', jobticketSchema)
export default Jobticket
