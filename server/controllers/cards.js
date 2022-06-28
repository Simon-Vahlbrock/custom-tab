import Card from "../models/card.js";

export const getCards = async (req, res) => {
    try {
        const cards = await Card.find();

        res.status(200).json(cards);
    } catch (e) {
        res.status(404).json({ message: e.message});
    }
}

export const createCard = async (req, res) => {
    const card = req.body;

    const newCard = new Card(card);

    try {
        await newCard.save();

        res.send(201).json(newCard)
    } catch (e) {
        res.status(409).json({ message: e.message});
    }
}