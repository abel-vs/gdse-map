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
                    <h4>What is Lorem Ipsum?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Select using the drop down menus, if you want to disable the information for one country just click on the related color in the legend.</p>
                </div>
                <div className={styles.graph_container}>
                    <SpiderGraph/>
                </div>
            </div>
        </div>
    )
}

export default Ref;