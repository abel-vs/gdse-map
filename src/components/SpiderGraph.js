import React from "react";
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

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const data = {
    labels: ["Power Distance", "Individualism", "Masculinity", "Uncertainty Avoidance", "Long Term Orientation", "Indulgence"],
    datasets: [
        {
            label: "United Kingdom",
            data: list.countries[0].values,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

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
    return (
        <div>
            <h1>Hello world</h1>
            <div className={styles.graph}>
                <Radar data={data} options={options}/>
            </div>
        </div>
    )
}

export default SpiderGraph;