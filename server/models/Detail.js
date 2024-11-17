import mongoose from 'mongoose';

const detailSchema = new mongoose.Schema({
  question: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Master', required: true },  // Reference to Master
});

const Detail = mongoose.model('Detail', detailSchema);
export default Detail;
