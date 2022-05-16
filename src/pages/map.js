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
                        HEllO world
                    </h1>
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
