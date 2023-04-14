import mongoose from 'mongoose'

const deptSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  name: { type: String, require: true },
  description: { type: String, require: false },
})

const Dept = mongoose.models.Dept || mongoose.model('Dept', deptSchema)
export default Dept
