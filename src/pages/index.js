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
                    <div>
                        <a href='/gdse-map/map' className="button" size="md" variant='blue'>Explore Culture Map</a>
                    </div>
                    <div>
                        <a href='/gdse-map/hofstede' className="button" size="md" variant="green">Compare Cultural Dimensions</a>
                    </div>
                    <div>
                        <a href='/gdse-map/about' className="button" size="md">Learn more about GDSE</a>
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