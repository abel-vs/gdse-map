import React from "react";
import list from "../components/info.json";

const CountryRefs = () => {
    return (
        <> {list.countries.map((country) =>
                <div>
                    <h1>{country.name}</h1>
                    <ol>
                        {country.refs.map((ref) =>
                            <li>{ref}</li>
                        )}
                    </ol>
                </div>
            )}
        </>
    )
}

export default CountryRefs;