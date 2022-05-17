import React from 'react';
import './index.css';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="content">
            Welcome to the
            <h1 className="title"> GDSE Culture Map</h1>
            <h2 className='subtitle'>An interactive map for comparing cultural differences regarding globally distributed software engineering! </h2>

            <p className='centerText'>
            We have compiled a summary of distinct differences between cultures, collected in a map such that users can quickly go through important cultural differences between them and their team members.
            We used three separate categories: organisational structure, meetings, and social work settings.
            </p>
            <Button variant="primary" href='/gdse-map/map' className="button">Open Map</Button>
        </div>
    );
};

export default Home;