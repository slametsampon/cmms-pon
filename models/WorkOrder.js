import mongoose from 'mongoose';

const woSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  woNumber: { type: String, require: true },
  tagnumber: { type: String, require: true },
  problem: { type: String, require: true },
  dateOpen: { type: String, require: true },
  statusId: { type: Number, require: true },
  destSectionId: { type: Number, require: true },
  originatorId: { type: Number, require: true },
  currentUserId: { type: Number, require: true },
  executorId: { type: Number, require: true },
  dateFinish: { type: String, require: true },
  priorityId: { type: Number, require: true },
});

const WorkOrder =
  mongoose.models.WorkOrder || mongoose.model('WorkOrder', woSchema);
export default WorkOrder;
