import Card from "../Model/CardModel.js";

export const AddCard = async (req, res) => {
  const { companyName, address, mobile, website, email, WorkorItemSupply, AuthorizedDealer } = req.body;

  if (!companyName || !address || !mobile || !email || !WorkorItemSupply || !AuthorizedDealer) {
    return res.status(401).json({ Message: 'All fields are required' });
  }

  const newCard = new Card({
    companyName,
    address,
    mobile,
    website, // Corrected field name
    email,
    WorkorItemSupply,
    AuthorizedDealer
  });

  try {
    await newCard.save();
    res.status(201).json({ Message: 'Card created successfully' });
  } catch (error) {
    console.error('Error saving card:', error);
    res.status(500).json({ Message: 'Server error' });
  }
};

export const GetCard = async (req, res) => {
  try {
    const Cards = await Card.find().exec();

    if (Cards.length === 0) {
      return res.status(404).json({ Message: 'No Cards found' });
    }
    res.status(200).json(Cards);
  } catch (error) {
    console.error('Error fetching cards data:', error);
    res.status(500).json({ Message: 'Server error' });
  }
};
