import axios from 'axios';

const url = 'http://localhost:5001/cards';

export const getCards = () => axios.get(url);