import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import styles from "./map.module.css";
import MapChart from "../components/MapChart";

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
                    Hover over a country to get a short summary of the important cultural aspects of this country.
                    Click on the country for more detailed information.
                    <br />
                    Currently supported countries are: 
                    {}
                </div>
                <div className={styles.summary}>
                    <h1>
                        Summary
                    </h1>
                    {summary.length > 1 ?
                        <ul>
                            {summary.map((x) => <li>{x}</li>)}
                        </ul>
                        : "Hover over a country to see a summary."}
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
