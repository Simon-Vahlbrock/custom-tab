import {useEffect, useMemo} from "react";
import './app.scss'
import {getBackgroundImage} from "../utils/background";
import Search from "./search/Search";
import Cards from "./cards/Cards";
import {useDispatch} from "react-redux";
import {loadCards} from "../redux-modules/cards/actions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCards());
    },[dispatch])

    return useMemo(() => (
        <div className="app" style={{backgroundImage: getBackgroundImage()}}>
            <Search/>
            <Cards/>
        </div>
    ), []);
}

App.displayName = "App";

export default App;