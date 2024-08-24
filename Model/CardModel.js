import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  address: { type: String, required: true },
  mobile: { type: String, required: true },
  website: { type: String, required: true }, // Corrected field name
  email: { type: String, required: true },
  WorkorItemSupply: { type: String, required: true },
  AuthorizedDealer: { type: String, required: true }
});

const Card = mongoose.model('Card', cardSchema);

export default Card;
