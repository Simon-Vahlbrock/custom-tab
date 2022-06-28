import {getCards} from "../../api/cards/get";
import {setCards} from "./slice";

export const loadCards = () => async (dispatch) => {
    try {
        const {data} = await getCards();
        dispatch(setCards(data));
    } catch (e) {
        console.log(e);
    }
}