import React from 'react';
import Gradient from 'rgt';
import './index.css';
import { Button, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="content">
            <Row className='align-items-center'>
                <Col>
                    <h1 className='title' >
                        <Gradient dir="left-to-right" from="#34eb98" to="#007CF0">
                            GDSE Culture Map
                        </Gradient>
                    </h1>
                    <p className='subtitle'>An interactive map for comparing cultural differences regarding globally distributed software engineering! </p>
                    <div className="info">
                        <a href='/gdse-map/map' className="button">Explore Culture Map</a>
                        <br/>
                        Get to know some defining characteristics about business cultures around the globe. 
                        Learn how organisations are structured, meetings take place, and how to behave at social events.
                    </div>
                    <div className='info'>
                        <a href='/gdse-map/hofstede' className="button">Compare Cultural Dimensions</a>
                        <br/>
                        Compare countries based on Hofstede's Cultural Dimensions. 
                        Use the six defining dimensions to get a clear image on how two countries differ and how they are similar.
                    </div>
                    <div className='info'>
                        <a href='/gdse-map/about' className="button">Learn about the challenges of GDSE </a>
                        <br/>
                        Learn some general tips about handling cultural differences and how to become a better communicator and team player in a distributed setting.
                    </div>
                </Col>
                <Col>
                    <iframe src="https://my.spline.design/untitled-e9a16fa4e0643ee52bb7f6f41cbb067b/" className='globe'></iframe>
                </Col>
            </Row>
        </div>
    );
};

export default Home;