import {Container, Card, Row, Col, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import cse from "./cse.jpg"
import ece from "./ece.jpeg"
import eee from "./eee.jpg"
import mech from "./mech.jpg"
import chem from "./chem.jpg"
import civil from "./civil.jpg"
import logo from "./logo.jpg"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="logo" />
        <h1> Quest Test Series 2023 </h1>
      </header>

      <Container>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Card className="card">
              <Card.Img variant="top" src={cse} />
              <Card.Body>
                <Card.Title>CSE/ISE/AIDS/AIML</Card.Title>
                <Card.Text></Card.Text>
                <Link to="https://unstop.com/p/quest-test-series-csisaiad-quest-690284" target="__blank" className="btn btn-success">Go &rarr;</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={ece} />
              <Card.Body>
                <Card.Title>EC/EI/ET</Card.Title>
                <Card.Text></Card.Text>
                <Link to="https://unstop.com/p/quest-test-series-eceiet-quest-690294" target="__blank" className="btn btn-success">Go &rarr;</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={eee} />
              <Card.Body>
                <Card.Title>EEE</Card.Title>
                <Card.Text></Card.Text>
                <Link to="https://unstop.com/p/quest-test-series-eee-quest-690296" target="__blank" className="btn btn-success">Go &rarr;</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={mech} />
              <Card.Body>
                <Card.Title>Mechanical/IEM</Card.Title>
                <Card.Text></Card.Text>
                <Link to="https://unstop.com/p/quest-test-series-2023-mechanical-quest-690172" target="__blank" className="btn btn-success">Go &rarr;</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={chem} />
              <Card.Body>
                <Card.Title>Chemical/Biotechnology</Card.Title>
                <Card.Text></Card.Text>
                <Link to="https://unstop.com/p/quest-test-series-chembiotech-quest-690257" target="__blank" className="btn btn-success">Go &rarr;</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={civil} />
              <Card.Body>
                <Card.Title>Civil</Card.Title>
                <Card.Text></Card.Text>
                <Link to="https://unstop.com/p/quest-test-series-2023-civil-quest-690268" target="__blank" className="btn btn-success">Go &rarr;</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="footer">
        <h5>&#169; Team Quest 2023</h5>
      </footer>
    </div>
  );
}

export default App;
