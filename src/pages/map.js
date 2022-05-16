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
                <div className={styles.explanation}>
                    <h1>
                        Welcome to our map!
                    </h1>
                    <p>
                        By hovering over a country, you can get a short summary of the important cultural aspects of this country.
                        \n When you want to get a more extensive overview, click on the country.
                        That is where you can find the three categories:
                    </p>
                    <ul>
                        <li>organizational structure</li>
                        <li>meetings</li>
                        <li>social work settings</li>
                    </ul>
                    <h3>Enjoy!</h3>
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
