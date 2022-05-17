import React, { memo, useState } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import list from "./info.json"
import Popup from 'reactjs-popup';
import {Button} from "react-bootstrap";
import './MapChart.css'

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const findId = country => {
    for (let i = 0; i < list.countries.length; i++) {
        console.log(country);
        if (country === list.countries[i].name) {
            return i;
        }
    }
    return -1;

}

const getText = id => {
    if (id === -1) {
        return " — This countries information has not yet been added.";
    } else {
        return "";
    }
}

const getInfoById = (country) => {
    for (let i = 0; i < list.countries.length; i++) {
        // console.log(country);
        if (country === i) {
            return  <div>
                       <h3>Organisational structure etiquette</h3>
                        <p>
                            {list.countries[i].organisational}
                        </p>
                        <h3>Meeting etiquette</h3>
                        <p>
                            {list.countries[i].meetings}
                        </p>
                        <h3>Social work setting etiquette</h3>
                        <p>
                            {list.countries[i].social}
                        </p>
                    </div>;

        }
    }
    return <h3>This country has not yet been analysed.</h3>;
}

const MapChart = ({ setTooltipContent }) => {
    const [show, setShow] = useState(false);
    const [country, setCountry] = useState(-1);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 100}}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <>
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => {
                                            const {NAME} = geo.properties;
                                            const id = findId(country);
                                            setTooltipContent(`${NAME} ${getText(id)}`);
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent("");
                                        }}
                                        onClick={() => {
                                            const {NAME} = geo.properties;
                                            const id = findId(NAME);
                                            setCountry(id);
                                            if (id !== -1) {
                                                handleShow();
                                            }
                                        }}
                                        style={{
                                            default: {
                                                fill: "#D6D6DA",
                                                outline: "none"
                                            },
                                            hover: {
                                                fill: "#F53",
                                                outline: "none"
                                            },
                                            pressed: {
                                                fill: "#E42",
                                                outline: "none"
                                            }
                                        }}
                                    />
                                    {/*{console.log(geo.properties.NAME)}*/}
                                </>
                            ))
                        }
                    </Geographies>
            </ComposableMap>
            <div>
                <Popup
                    open={show}
                    closeOnDocumentClick
                    onClose={handleClose}
                >
                    <div>
                        {getInfoById(country)}
                        <Button className="btn btn-dark" onClick={handleClose}>
                            &times;
                        </Button>
                    </div>
                </Popup>
            </div>
        </>
    );
};

export default memo(MapChart);