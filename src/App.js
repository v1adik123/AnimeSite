import React from "react";
import {SummerList} from "./components/SummerList/SummerList";
import {StartHeader} from "./components/StartHeader/StartHeader";


function App() {
    return (
        <div>
            <StartHeader/>
            <div className="catalogSummerSeason">
                <p className={"catalogText"}>Аниме летнего сезона</p>
            </div>
            <div className="episodeList">
                <SummerList/>
            </div>
        </div>
    );
}

export default App;
