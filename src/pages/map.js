import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import styles from "./map.css";

import MapChart from "../components/MapChart";

function Map() {
    const [content, setContent] = useState("");
    return (
        <>
            <div className={styles.flex_row}>
                <div className="explanation">
                    <h1>
                        Welcome to the map!
                    </h1>
                    By hovering over a country, you can get a short summary of the important cultural aspects of this country.
                    <br />
                    Currently supported countries: UK, Germany, USA, Japan.
                </div>
                <div className={styles.map}>
                    <MapChart setTooltipContent={setContent} />
                    <ReactTooltip>{content}</ReactTooltip>
                </div>
            </div>
        </>
    );
}

export default Map;
