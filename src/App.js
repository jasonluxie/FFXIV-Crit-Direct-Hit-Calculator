import Banner from "./components/Banner";
import Form from "./components/Form";
import React, { useState } from "react";
import levelData from "./levelData";

function App() {
    const [level, setLevel] = useState(1);
    const [playerCrit, setPlayerCrit] = useState(0);
    const [playerDH, setplayerDH] = useState(0);

    const critCalculator = (level, playerCrit) => {
        const critPercent =
            (200 *
                ((playerCrit - levelData[level].sub) / levelData[level].div) +
                50) /
            1000;
        const critStrength =
            (200 *
                ((playerCrit - levelData[level].sub) / levelData[level].div) +
                1400) /
            1000;
        return [critPercent, critStrength];
    };

    return (
        <div className="App">
            <Banner />
            <Form type="level" level={level} setLevel={setLevel}/>
            <Form type="crit" calculator={critCalculator}/>
            <Form type="directHit" />
        </div>
    );
}

export default App;
