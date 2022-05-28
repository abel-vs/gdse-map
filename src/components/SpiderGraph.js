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
                // This more specific font property overrides the global property
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
            backgroundColor: 'rgba(255, 85, 51, 0.2)',
            borderColor: 'rgba(255, 85, 51, 1)',
            pointBackgroundColor: 'rgba(255, 85, 51, 1)',
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
        // <div className={styles.container_body}>
        //     <div className={styles.explanation}>
        //         <h3>Explanation</h3>
        //         <h4>What is Lorem Ipsum?</h4>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        //     </div>
        //     <div className={styles.graph_container}>
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
        {/*//     </div>*/}
        </>
        // </div>
    )
}

export default SpiderGraph;