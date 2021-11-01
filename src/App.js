import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import TabBar from './components/patterns/molecules/TabBar';

function App() {
  const[hideInfo,setHideInfo] = useState(false)
  return (
    <div className="App">
      <Container className='py-4'>
        <Row>
          <Col>
            <h1>Dictionary APP</h1>
          </Col>
        </Row>
       {!hideInfo && <Row className='shadow text-start my-3 p-3'>
          <Col>
            <div className='d-flex'>
              <h4>Info:</h4>
              <div className='w-100 text-end' onClick={()=>{setHideInfo(true)}}><span className='p-1 px-3 border rounded'>Click to hide</span></div>
            </div>
            <div><b>Dataset: </b>https://github.com/kkenan/datasets/blob/master/pho</div>
            <div><b>Dictionary url: </b> <span style={{color:'#0d6efd'}}>http://localhost:8080/api/v1/phone-numbers/autocomplete</span> <small>(click on Dictionary)</small></div>
            <div><b>History url: </b> <span style={{color:'#0d6efd'}}>http://localhost:8080/phone-numbers/autocomplete/history</span> <small>(click on History)</small></div>
            <div><b>Junior software engineer: </b>Lejla Mujić</div>
          </Col>
        </Row>}
        <Row>
          <Col>
            <TabBar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
