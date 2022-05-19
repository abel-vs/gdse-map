import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import styles from "./map.module.css";

import MapChart from "../components/MapChart";
import list from "../components/info.json";

const renderSummary = (summary) => {
    for (let i = 0; i < summary.length; i++) {

    }
}

function Map() {
    const [content, setContent] = useState("");
    const [summary, setSummary] = useState([""]);
    return (
        <>
            <div className={styles.header_container}>
                <div className={styles.header}>
                    <h1>
                        Welcome to the map!
                    </h1>
                    By hovering over a country, you can get a short summary of the important cultural aspects of this country.
                    When you click on the country more detailed information will be displayed.
                    <br />
                    Currently supported countries are outlined: UK, Germany, USA.
                </div>
                <div className={styles.summary}>
                    <h1>
                        Summary
                    </h1>
                    <ul>
                        {console.log(summary)}
                        {summary.length > 1 ? summary.map((x) =>
                            <li>{x}</li>
                        ) : "Hover over a country to see a summary."}
                    </ul>
                </div>
            </div>
                <div className={styles.map_container}>
                    <MapChart setTooltipContent={setContent} setCountrySummary={setSummary} />
                    <ReactTooltip>{content}</ReactTooltip>
                </div>
        </>
    );
}

export default Map;
