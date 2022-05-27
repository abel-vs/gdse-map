import React from "react";
import list from "../components/info.json";
import styles from "./CountryRefs.module.css"

const CountryRefs = () => {
    return (
        <div className={styles.body}> {list.countries.map((country) =>
                <div>
                    <h2>{country.name}</h2>
                    <ol>
                        {country.refs.map((ref) =>
                            <li>{ref}</li>
                        )}
                    </ol>
                </div>
            )}
        </div>
    )
}

export default CountryRefs;