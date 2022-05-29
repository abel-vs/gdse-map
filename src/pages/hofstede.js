import React from "react";
import SpiderGraph from "../components/SpiderGraph";
import styles from "./hofstede.module.css"

function Ref() {
    return (
        <div>
            <h1 className={styles.header}>Hofstede Cultural dimensions</h1>
            <div className={styles.container_body}>
                <div className={styles.explanation}>
                    <h3>Explanation</h3>
                    The Hofstede model contains six dimensions>
                    Geert Hofstede developed it at the end of the 1970s and it has become an internationally recognized standard for understanding cultural differences.
                    Hofstede studied people in more than 50 countries who worked for IBM.
                    <h4>Power Distance</h4>

                    <h4></h4>


                </div>
                <div className={styles.graph_container}>
                    <SpiderGraph/>
                </div>
            </div>
        </div>
    )
}

export default Ref;