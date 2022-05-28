import React, {useState} from "react";
import list from "../components/info.json";
import styles from "./SpiderGraph.module.css"
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import {Dropdown} from "react-bootstrap";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

// const data = {
//     labels: ["Power Distance", "Individualism", "Masculinity", "Uncertainty Avoidance", "Long Term Orientation", "Indulgence"],
//     datasets: [
//         {
//             label: "United Kingdom",
//             data: list.countries[0].values,
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 1,
//         },
//     ],
// };

const options = {
    scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 50,
            suggestedMax: 100
        }
    }
};

const SpiderGraph = () => {
    const [countryA, setCountryA] = useState("Germany");
    const [countryB, setCountryB] = useState("United Kingdom");
    const data = {
    labels: ["Power Distance", "Individualism", "Masculinity", "Uncertainty Avoidance", "Long Term Orientation", "Indulgence"],
    datasets: [
        {
            label: countryA,
            data: list.countries.find(x => x.name === countryA).values,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
        {
            label: countryB,
            data: list.countries.find(x => x.name === countryB).values,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
        },
    ],
};
    return (
        <div>
            <h1>Hello world</h1>
            <div className={styles.dropdowns}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Choose country A
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark">
                        {list.countries.map((x) =>
                            <Dropdown.Item href="#/action-2">{x.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example2" variant="secondary">
                        Choose country B
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark">
                        {list.countries.map((x) =>
                            <Dropdown.Item href="#/action-2">{x.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className={styles.graph}>
                <Radar data={data} options={options}/>
            </div>
        </div>
    )
}

export default SpiderGraph;