import {useMemo} from "react";
import './app.scss'
import {getBackgroundImage} from "../utils/background";

const App = () => {
    return useMemo(() => (
        <div className="app" style={{backgroundImage: getBackgroundImage()}}>
            Hallo
        </div>
    ), []);
}

App.displayName = "App";

export default App;