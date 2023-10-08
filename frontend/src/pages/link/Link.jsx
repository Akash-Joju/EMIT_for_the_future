import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./link.css";

function Link() {
  const cardStyle = {
    maxWidth: '100%', // Set a maximum width of 100% to fill the whole page width
  };

  return (
    <div className="app-container"> {/* Apply the CSS class to create the background */}
      <Container>
        <Row>
          <Col md={6}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/4d/1c/5f/4d1c5f91d1627f33c362005c5b0d8fe0.jpg" />
              <Card.Body>
                <Card.Title>ABOUT NASA</Card.Title>
                <Card.Text>
                  <b>NASA, the US space agency, explores space, conducts research, and develops technology. It's known for historic moon landings and missions to study planets and stars. NASA advances our understanding of the cosmos and contributes to scientific innovation.</b>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="https://www.nasa.gov/">NASA</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card style={cardStyle}>
              <Card.Img variant="top" height="475px" src="./img/2.jpg" />
              <Card.Body>
                <Card.Title>VISIONS: The EMIT Open Data Portal</Card.Title>
                <Card.Text>
                  <b>This portal shows EMIT data coverage to-date and forecasts of future acquisitions (updated daily). Each scene contains links to data available for download from the LP DAAC. See Map Details for information on what you can explore.</b>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="https://earth.jpl.nasa.gov/emit/data/data-portal/coverage-and-forecasts/">VISIT</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src="./img/3.jpg" />
              <Card.Body>
                <Card.Title>NASA EMIT</Card.Title>
                <Card.Text>
                  <b>NASA's EMIT (Earth's Mantle Imaging through Tomography) project is a groundbreaking endeavor that delves into the Earth's hidden mysteries, unraveling the secrets of its deep interior</b>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="https://earth.jpl.nasa.gov/emit/">NASA-EMIT</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card style={cardStyle}>
              <Card.Img variant="top" height="354px" src="./img/4.jpg" />
              <Card.Body>
                <Card.Title>EMIT APP</Card.Title>
                <Card.Text>
                  <b>We made an app on EMIT. Go and check it out.</b>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="/EMITApp.apk" download>Download APK</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Link;