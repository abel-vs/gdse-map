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

const options = {
    responsive: true,
    scales: {
        r: {
            angleLines: {
                display: false
            },
            max: 100,
            min: 0,
            pointLabels: {
                font: {
                    size: 16
                }
            },
        }

    },
    plugins: {
        legend: {
            labels: {
                font: {
                    size: 18
                },
                padding: 30
            }
        }
    }

};

const SpiderGraph = () => {
    const [countryA, setCountryA] = useState("Germany");
    const [countryB, setCountryB] = useState("United Kingdom");
    const handleCountryA = (country) => {
        return function() {setCountryA(country)}
    };
    const handleCountryB = (country) => {
        return function() {setCountryB(country)}
    };
    const data = {
    labels: ["Power Distance", "Individualism", "Masculinity", "Uncertainty Avoidance", "Long Term Orientation", "Indulgence"],
    datasets: [
        {
            label: countryA,
            data: list.countries.find(x => x.name === countryA).values,
            backgroundColor: 'rgba(95, 203, 143, 0.2)',
            borderColor: 'rgba(95, 203, 143, 1)',
            pointBackgroundColor: 'rgba(95, 203, 143, 1)',
            borderWidth: 2,
        },
        {
            label: countryB,
            data: list.countries.find(x => x.name === countryB).values,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
        },
    ],
};
    return (
        <>
            <div className={styles.dropdowns}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Choose country A
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark">
                        {list.countries.map((x) =>
                            <Dropdown.Item onClick={handleCountryA(x.name)} active={x.name === countryA}>{x.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example2" variant="secondary">
                        Choose country B
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark">
                        {list.countries.map((x) =>
                            <Dropdown.Item onClick={handleCountryB(x.name)} active={x.name === countryB}>{x.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className={styles.graph}>
                <Radar data={data} options={options}/>
            </div>
            <div>
                <p>
                    Data produced by: Hofstede Insights. (2022).
                    <em>Compare countries</em>.
                    Retrieved June 2, 2022, from
                    <a href="https://www.hofstede-insights.com/fi/product/compare-countries/">https://www.hofstede-insights.com/fi/product/compare-countries/</a>
                </p>
            </div>
        </>
    )
}

export default SpiderGraph;