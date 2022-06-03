import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "../components/MapChart";
import { Row, Col } from "react-bootstrap";

function Map() {
    const [content, setContent] = useState("");
    const [summary, setSummary] = useState([""]);
    return (
        <div className="content">
            <Row style={{ height: "150px" }}>
                <Col>
                    <h1>
                        Welcome to the map!
                    </h1>
                    Hover over a country to get a short summary of the important cultural aspects of this country.
                    Click on the country for more detailed information.
                    We used three separate categories: organisational structure, meetings, and social work settings.
                    <br />
                    Currently supported countries are:
                    { }
                    <br />
                </Col>
                <Col>
                    <h1>
                        Summary
                    </h1>
                    {summary.length > 1 ?
                        <ul>
                            {summary.map((x) => <li>{x}</li>)}
                        </ul>
                        : "Hover over a country to see a summary."}
                </Col>
            </Row>
            <div>
                <MapChart setTooltipContent={setContent} setCountrySummary={setSummary} />
                <ReactTooltip>{content}</ReactTooltip>
            </div>
        </div>
    );
}

export default Map;
