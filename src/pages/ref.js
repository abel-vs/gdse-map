import React from "react";
import CountryRefs from "../components/CountryRefs";
import styles from "./ref.module.css";

function Ref() {
    return (
        <div>
            <h1 className={styles.header}>References</h1>
            {/*<h2>About</h2>*/}
            <CountryRefs/>
        </div>
    )
}

export default Ref;