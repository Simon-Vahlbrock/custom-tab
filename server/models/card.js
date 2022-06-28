import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String,
    link: String,
    img: String,
    playlists: [{
        name: String,
        link: String
    }]
});

const Card = mongoose.model("Card", cardSchema);

export default Card;