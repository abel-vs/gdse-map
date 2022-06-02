import React from "react";
import list from "../components/info.json";

function Ref() {
    return (
        <div className="content">
            <h1>References</h1>
            {list.countries.map((country) =>
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

export default Ref;