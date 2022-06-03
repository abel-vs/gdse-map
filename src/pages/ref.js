import React from "react";
import list from "../components/info.json";

function Ref() {
    return (
        <div className="content">
            <h1>References</h1>
            This page contains the sources we used to gather the information provided on this website.
            <div className='disclaimer'>
                ❗️ The list of cultural differences is not exhaustive. 
                The information on this website is compiled by a group of students from the Netherlands. 
                Readers should be aware of the Western perspective of the writers.
            </div>
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