import {useMemo} from "react";
import './app.scss'
import {getBackgroundImage} from "../utils/background";
import Search from "./search/Search";
import Cards from "./cards/Cards";

const App = () => {
    return useMemo(() => (
        <div className="app" style={{backgroundImage: getBackgroundImage()}}>
            <Search/>
            <Cards/>
        </div>
    ), []);
}

App.displayName = "App";

export default App;