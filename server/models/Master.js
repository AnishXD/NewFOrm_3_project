import mongoose from 'mongoose';

const masterSchema = new mongoose.Schema({
  name: { type: String, required: true },  // You can add more fields if necessary
});

const Master = mongoose.model('Master', masterSchema);
export default Master;
