import React from 'react';
import './index.css';

const Home = () => {
    return (
        <div className="content">
            <h1 className="title">Welcome to the GDSE Culture Map</h1>

            <p>Welcome to the map of cultural differences regarding globally distributed software engineering! </p>

            <p>
            We have compiled a summary of distinct differences between cultures, collected in a map such that users can quickly go through important cultural differences between them and their team members.
            We used three separate categories: organisational structure, meetings, and social work settings.
            </p>
            <br/>
            <div className='disclaimer'>
            Disclaimer: The list of differences is not exhaustive, and the information is taken from various information resources that are mentioned on the web pages.
            </div>
        </div>
    );
};

export default Home;