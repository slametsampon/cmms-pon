import mongoose from 'mongoose'

const sectionSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  name: { type: String, require: true },
  description: { type: String, require: false },
  departmentId: { type: Number, require: true },
})

const Section = mongoose.models.Section || mongoose.model('Section', sectionSchema)
export default Section
